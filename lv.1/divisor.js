// 약수의 덧셈과 뺄셈

// 두 정수 left와 right가 매개변수로 주어집니다.
// left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
// 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

function solution(left, right) {
  var answer = 0;
  let count = right - left;

  while (count >= 0) {
    let number = 2;

    if (left === 1) {
      number = 1;
    }

    for (let i = 2; i < left; i++) {
      if (left % i === 0) {
        number++;
      }
    }

    if (number % 2 === 0) {
      answer += left;
    } else {
      answer -= left;
    }

    left++;
    count--;
  }

  return answer;
}

console.log(solution(13, 17));
console.log(solution(24, 26));
console.log(solution(45, 50));