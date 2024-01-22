// N진수 게임
// https://school.programmers.co.kr/learn/courses/30/lessons/17687
// 진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p 가 주어진다.

function solution(n, t, m, p) {
  let answer = "";

  for(let i = 0; i <= t * m; i++) {
    answer += i.toString(n).toUpperCase();
    if(answer.length >= t * m) {
      answer = answer.substring(0, t * m);
      break;
    }
  };

  let result = "";
  for(let i = 0; i < answer.length; i++) {
    if(i % m + 1 === p) {
      result += answer[i];
    }
  }

  return result;
};

console.log(solution(2, 4, 2, 1));
console.log(solution(16, 16, 2, 1));
console.log(solution(16, 16, 2, 2));
