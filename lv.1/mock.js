// 모의고사
// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다.
// 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.
// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때,
// 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

function solution(answers) {
  let people = {
    one: 0,
    two: 0,
    three: 0,
  };

  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (one[i % one.length] === answers[i]) {
      people.one += 1;
    }

    if (two[i % two.length] === answers[i]) {
      people.two += 1;
    }

    if (three[i % three.length] === answers[i]) {
      people.three += 1;
    }
  }
  console.log(people);
  let max = 0;
  for (const p in people) {
    if (max < people[p]) {
      max = people[p];
    }
  }

  let result = [];
  for (const p in people) {
    if (people[p] === max) {
      switch (p) {
        case "one":
          result.push(1);
          break;
        case "two":
          result.push(2);
          break;
        case "three":
          result.push(3);
          break;
      }
    }
  }

  return result.sort((a, b) => a - b);
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
console.log(solution([1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(solution([5, 5, 5, 5, 5, 5, 5, 5]));
