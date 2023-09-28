// 행렬 곱하기
function solution(arr1, arr2) {
    return arr1.map((row, i) => row.map((val, j) => val * arr2[i][j]) )
}

console.log(
  solution(
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ]
  )
);
