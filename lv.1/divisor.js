// 약수의 덧셈과 뺄셈 

// 두 정수 left와 right가 매개변수로 주어집니다.
// left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
// 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 내가 푼 문제
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

// 더 효율적인 방법
// 수학적 특성 사용. 제곱수는 약수의 개수가 홀수.
// 예를 들어, 9는 3의 제곱수, 약수는 1, 3, 9이기 때문에 약수의 개수가 홀수.
// 12는 1, 2, 3, 4, 6, 12 약수의 개수가 6개이기 때문에 짝수.
function solution2(left, right) {
  let answer = 0;
  
  for(let i = left; i <= right; i++) {
      if(Number.isInteger(Math.sqrt(i))) {
          answer -= i;
      } else {
          answer += i;
      }
  }
  
  return answer;
}

console.log(solution2(13, 17));
console.log(solution2(24, 26));
console.log(solution2(45, 50));

// 여기서 isInteger() 메서드는 값이 정수인지 판별하여 boolean 값 반환