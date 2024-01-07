// 소수 만들기
// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
// 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때,
// nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(nums) {
  let answer = 0;
  let decimal = [];
  for (let i = 0; i < nums.length; i++) {
    let start = i + 1;

    for (start; start < nums.length; start++) {
      let next = start + 1;

      for (next; next < nums.length; next++) {
        decimal.push(nums[i] + nums[start] + nums[next]);
      }
    }
  }

  for (const num of decimal) {
    let isPrime = true;
    for(let i = 3; i < num; i++) {
      if(num % i === 0) {
        isPrime = false;
      }
    }

    if(isPrime) {
      answer += 1
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
