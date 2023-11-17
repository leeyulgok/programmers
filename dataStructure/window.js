// 슬라이딩 윈도우
// 배열에서 연속된 3개의 수에서 최댓값 구하기

function solution(arr) {
  let windowSum = arr[0] + arr[1] + arr[2];
  let maxSum = windowSum;

  for (let i = 3; i < arr.length; i++) {
    windowSum = windowSum - arr[i - 3] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(solution([1, 3, 5, 2, 8, 7, 1, 2]));
