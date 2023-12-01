// 행렬 곱하기
// 2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.

function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let row = [];

    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;

      for (let k = 0; k < arr1[i].length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }

      row.push(sum);
    }

    answer.push(row);
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);
console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
);
