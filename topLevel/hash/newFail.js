// 수많은 마라톤 선수들이 두 번의 마라톤 대회에 참여하였습니다.
// 첫 번째 마라톤에서는 모든 선수가 완주하였지만, 두 번째 마라톤에서는 일부 선수들만 완주하였습니다.
// 첫 번째 마라톤에 참여한 선수들의 이름이 담긴 배열 firstRace, 두 번째 마라톤에 참여한 선수들의 이름이 담긴 배열 secondRace
// 그리고 두 번째 마라톤에서 완주한 선수들의 이름이 담긴 배열 secondRaceCompletion이 주어질 때,
// 첫 번째 마라톤에도 참여하고 두 번째 마라톤에도 참여했으나 완주하지 못한 선수들의 이름을 배열로 return 하도록 solution 함수를 작성해주세요.

function solution(firstRace, secondRace, secondRaceCompletion) {
  let hashMap = {};
  let failPersons = [];

  for (const person of firstRace) {
    hashMap[person] = 0;
  }

  for (const person of secondRace) {
    hashMap[person]++;
  }

  for (const person in hashMap) {
    if (hashMap[person] > 0 && !secondRaceCompletion.includes(person)) {
      failPersons.push(person);
    }
  }

  return failPersons;
}

const firstRace = ["leo", "mislav", "ana", "stanko"];
const secondRace = ["leo", "mislav", "ana", "ivan"];
const secondRaceCompletion = ["leo", "ana"];

console.log(solution(firstRace, secondRace, secondRaceCompletion));

// 시작복잡도를 고려한 풀이
function solution(firstRace, secondRace, secondRaceCompletion) {
  let hashMap = {};
  let completionMap = {};
  let failPersons = [];

  for (const person of firstRace) {
    hashMap[person] = hashMap[person] || 0;
  }

  for (const person of secondRace) {
    if (hashMap[person] !== undefined) {
      hashMap[person]++;
    }
  }

  for (const person of secondRaceCompletion) {
    completionMap[person] = true;
  }

  for (const person in hashMap) {
    if (hashMap[person] > 0 && !completionMap[person]) {
      failPersons.push(person);
    }
  }

  return failPersons;
}
