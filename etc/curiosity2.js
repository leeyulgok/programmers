// 호기심2 - 주사위 굴리기 알고리즘
// 게임을 할 때, 부루마블과 같이 주사위를 굴려 해당 위치에 도착하면 상품을 주는 이벤트가 있다.
// 이런 이벤트는 어떻게 구현할 수 있을 지 궁금해서 만들어봤다.

// 상품
const prizes = [
  "상품1",
  "상품2",
  "상품3",
  "상품4",
  "상품5",
  "상품6",
  "상품7",
  "상품8",
  "상품1",
  "상품2",
  "상품3",
  "상품4",
  "상품5",
  "상품6",
  "상품7",
  "상품8",
];

// 주사위 굴리기 함수
function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}

// 상품 선택 함수
function seletePrize(currentPosition, diceValue) {
  let newPosition = (currentPosition + diceValue) % 16;
  return {prizes: prizes[newPosition], position: newPosition};
}

// 게임 실행 함수
function playGame(rollTimes) {
  let obtainedPrizes = [];
  let currentPosition = 0;

  for (let i = 0; i < rollTimes; i++) {
    let diceValue = rollDice();
    let result =  seletePrize(currentPosition, diceValue);
    
    obtainedPrizes.push(result.prizes);
    currentPosition = result.position;
  }

  return obtainedPrizes;
}

console.log(playGame(5));
