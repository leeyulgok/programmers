// 최대 평균값 찾기
// XYZ 기업에서는 매일 직원들의 성과를 점수로 기록하고 있습니다.
// 이 회사는 최근 N일 동안의 직원들의 성과 평균값이 가장 높은 연속된 K일을 찾아, 그 기간 동안의 우수 직원을 시상하려고 합니다.
// 당신은 주어진 성과 점수 배열 scores와 정수 K를 이용하여,
// 최근 N일 동안의 성과 평균값이 가장 높은 연속된 K일의 평균 성과 점수를 찾는 함수를 작성해야 합니다.

/**
 * @param {number[]} scores - 직원들의 일일 성과 점수를 나타내는 배열
 * @param {number} K - 연속된 일수
 * @return {number} - 최대 평균 성과 점수
 */
function findMaxAverage(scores, K) {
  let windowSum = 0;
  for (let i = 0; i < K; i++) {
    windowSum += scores[i];
  }
  let maxAverage = windowSum / K;

  for (let i = K; i < scores.length; i++) {
    windowSum = windowSum - scores[i - K] + scores[i];
    maxAverage = Math.max(maxAverage, windowSum / K);
  }

  return maxAverage;
}

const scores = [1, 12, 5, 3, 8, 10, 4, 2, 6, 7];
const K = 4;

console.log(findMaxAverage(scores, K));
