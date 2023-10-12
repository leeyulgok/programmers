// 폰켓몬

function solution(nums) {
  const takeNum = nums.length / 2;
  let hashMap = {};

  for (const poketmon of nums) {
    hashMap[poketmon] = true;
  }

  const typeCount = Object.keys(hashMap).length;

  return Math.min(typeCount, takeNum);
}

console.log(solution([3, 3, 3, 2, 2, 4]));
