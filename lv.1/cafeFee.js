// 카페 이용료 계산하기
// 모든 사람들이 좋아하는 특별한 카페에서는 음료의 가격이 일정하지 않습니다. 첫 번째 음료의 가격은 P원이며,
// 마신 음료의 수가 많아질수록 음료의 가격은 증가합니다.
// N 번째 음료의 가격은 P × N원입니다.
// 예를 들어, 첫 번째 음료의 가격이 500원이라면 두 번째 음료는 1000원, 세 번째 음료는 1500원이 됩니다.
// 여러분은 C잔의 음료를 마셨고, 가진 돈이 M원입니다.
// 여러분이 부족한 금액을 계산하는 프로그램을 작성하세요. 단, 금액이 부족하지 않다면 0을 반환합니다.

function calculateShortage(price, count, money) {
  const totalCost = (count * (2 * price + (count - 1) * price)) / 2;

  const answer = totalCost - money;

  return answer > 0 ? answer : 0;
}

console.log(calculateShortage(500, 3, 2000));
console.log(calculateShortage(100, 4, 1000));
