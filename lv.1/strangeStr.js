// 이상한 문자 만들기
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

function solution(str) {
  var answer = str
    .split(" ")
    .map((x) =>
      x
        .split("")
        .map((y, i) => {
          if (i % 2 === 0) {
            return (y = y.toUpperCase());
          } else {
            return (y = y.toLowerCase());
          }
        })
        .join("")
    )
    .join(" ");

  return answer;
}

console.log(solution("try hello world"));

// 효율적인 풀이
// 글로벌 정규 표현식을 사용하여 문자열 내의 모든 한 쌍의 문자 (또는 마지막 문자가 홀수 개인 경우 마지막 한 문자)를 찾아 대체
// replace() 첫 번째 매개변수: 대체될 문자열 또는 패턴을 지정.
// 두 번째 매개변수: 대체 문자열 또는 각 일치 항목을 대체하는 데 사용할 함수.

function solution2(s) {
  return s
    .toLowerCase()
    .replace(/(\w)(\w)?/g, (match, p1, p2) => p1.toUpperCase() + (p2 || ""));
}

// match: 현재 일치하는 전체 문자열.
// p1: 첫 번째 캡처 그룹 ((\w))과 일치하는 문자.
// p2: 두 번째 캡처 그룹 ((\w)?)과 일치하는 문자 또는 undefined.