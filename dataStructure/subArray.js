// 하위 배열 찾기
// 주어진 정수 배열에서, 연속된 하위 배열(subarray) 중 합이 0이 되는 모든 하위 배열을 찾아주세요.

function solution(arr) {
  const hashMap = { 0: [-1] }; // 초기화
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // 누적 합계를 계산합니다.

    // 이전에 동일한 합계가 나왔다면, 해당 인덱스에서 현재 인덱스까지의 하위 배열은 합계가 0입니다.
    if (sum in hashMap) {
      for (const start of hashMap[sum]) {
        console.log(arr.slice(start + 1, i + 1));
      }
    }

    // 현재 합계와 인덱스를 해시맵에 추가합니다.
    if (!hashMap[sum]) {
      hashMap[sum] = [];
    }
    hashMap[sum].push(i);
  }
}

solution([3, 4, -7, 3, 1, 3, 1, -4, -2, -2]);
