// 사진
// 당신은 대형 야생동물 공원에 방문했습니다. 이 공원에는 다양한 종류의 동물들이 있습니다.
// 공원 관리자는 각 방문객에게 동물들을 보며 사진을 찍을 기회를 제공합니다. 하지만, 사진은 각 동물 종류당 하나씩만 허용됩니다.
// 당신은 최대한 많은 종류의 동물을 사진에 담고 싶습니다. 하지만, 당신의 카메라는 메모리 제한이 있어 최대 M장의 사진만 찍을 수 있습니다.
// 이 때, 최대한 다양한 종류의 동물을 찍기 위한 전략을 세워야 합니다.
// 동물들의 목록이 주어질 때, 최대 M장의 사진에 담을 수 있는 동물의 최대 종류 수를 반환하는 함수를 작성하세요.

function solution(animals, M) {
  let hashMap = {};

  for (const animal of animals) {
    hashMap[animal] = true;
  }

  const takeCount = Object.keys(hashMap).length;

  return Math.min(M, takeCount);
}

console.log(solution([1, 2, 3, 1, 4, 2, 5], 5));
