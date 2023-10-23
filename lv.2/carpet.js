// 카펫
// Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때,
// 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

function solution(brown, yellow) {
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i === 0) {
      let j = yellow / i;
      if ((i + 2) * (j + 2) === brown + yellow) {
        return [j + 2, i + 2];
      }
    }
  }
}

console.log(solution(3004, 2996));
console.log(solution(8, 1));
console.log(solution(24, 24));
