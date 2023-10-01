// 3진법 뒤집기
// 자연수 n이 매개변수로 주어집니다.
// n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(n) {
  var answer = "";

  while (n > 0) {
    answer = (n % 3) + answer;
    n = Math.floor(n / 3);
  }

  var result = 0;
  answer = answer
    .split("")
    .reverse()
    .map(
      (num, i) => (result += Number(num) * Math.pow(3, answer.length - i - 1))
    )
    .pop();

  return answer || 0;
}

console.log(solution(45));
console.log(solution(125));

// 효율적인 풀이
// toString(3)를 활용한 3진법 변환과 parseInt의 두 번째 인자를 통해 3진법임을 알림
const solution2 = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};

console.log(solution2(45));
console.log(solution2(125));
