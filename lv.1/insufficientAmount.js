// 부족한 금액 채우기
// 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다.
// 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다.
// 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
// 단, 금액이 부족하지 않으면 0을 return 하세요.

function solution(price, money, count) {
  var answer = 0;
  var tryCount = 1;
  var tryMoney = 0;

  while (count > 0) {
    tryMoney += price * tryCount;
    tryCount++;
    count--;
  }

  if (tryMoney - money > 0) {
    return (answer = tryMoney - money);
  } else {
    return 0;
  }
}

console.log(solution(3, 20, 4));
console.log(solution(3, 31, 4));

// 가우스 공식(등차수열의 합 계산)
// sum = n / 2 (2a + ( n - 1) d);
// n은 항의 수, a는 첫번 째 항, d는 공차.
// 이 문제에서 n은 count, a와 d는 price

function solution2(price, money, count) {
  // 등차수열의 합 계산
  const totalCost = (count * (2 * price + (count - 1) * price)) / 2;

  const answer = totalCost - money;

  return answer > 0 ? answer : 0;
}

console.log(solution2(3, 20, 4));
console.log(solution2(3, 31, 4));