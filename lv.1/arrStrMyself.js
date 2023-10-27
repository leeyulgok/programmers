// 문자열 마음대로 정렬하기
// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때,
// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.

// 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면,
// 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

function solution(strings, n) {
  let str = [];
  let answer = [];

  for (const word of strings) {
    str.push(word[n]);
  }
  str.sort();
  strings.sort();
  for (let i = 0; i < str.length; i++) {
    for (const word of strings) {
      if (word[n] === str[i] && !answer.includes(word)) answer.push(word);
    }
  }

  return answer;
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));

function solution2(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a.localeCompare(b);
    }
    return a[n].localeCompare(b[n]);
  });
}

console.log(solution2(["sun", "bed", "car"], 1));
console.log(solution2(["abce", "abcd", "cdx"], 2));