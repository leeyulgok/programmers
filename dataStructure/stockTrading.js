// 주식 거래
// 당신은 주식 트레이더입니다. 주식의 가격이 시간 순서대로 주어질 때, 한 번의 거래로 얻을 수 있는 최대 이익을 찾아내세요.
// 여기서 한 번의 거래란 한 주식을 한 번 사고 한 번 팔아 넣은 것을 의미합니다.

function max_profit(list) {
  var min_price = Number.MAX_VALUE;
  var max_profit = 0;

  for (let i = 0; i < list.length; i++) {
    if (min_price > list[i]) {
        min_price = list[i];
    }

    if(list[i] - min_price > max_profit) {
        max_profit = list[i] - min_price;
    }
    console.log("MIN_PRICE", min_price);
    console.log("MAX_PROFIT", max_profit);
  }

  return max_profit;
}

console.log(max_profit([7, 2, 5, 3, 6, 1, 4])); // 5
// console.log(max_profit([7, 6, 4, 3, 1])); // 0
