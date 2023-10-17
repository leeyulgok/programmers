// JadenCase 문자열 만들기
// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다.
// 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

function solution(s) {
  let answer = s.split(" ");
  let newArr = [];

  for (const str of answer) {
    let strArr = str.split("");
    for (let i = 0; i < strArr.length; i++) {
      if (i === 0) {
        strArr[i] = strArr[i].toUpperCase();
      } else {
        strArr[i] = strArr[i].toLowerCase();
      }
    }
    newArr.push(strArr.join(""));
  }

  return newArr.join(" ");
}

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));

// 효율적인 풀이
function solution2(s) {
  return s
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
