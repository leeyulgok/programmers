// 효율적으로 공격하기

// 판 만들고 적 배치하기
function createBoard() {
  let board = Array(5)
    .fill(null)
    .map(() => Array(5).fill("."));

  let emptyPositions = [];
  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      emptyPositions.push([x, y]);
    }
  }

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * emptyPositions.length);
    const [randomX, randomY] = emptyPositions[randomIndex];

    board[randomX][randomY] = "O";

    emptyPositions.splice(randomIndex, 1);
  }

  board = board.map((row) => row.join(" ")).join("\n");
  return board;
}

console.log(createBoard());

// 유저 공격
function createAttackPattern() {
  const BOARD_SIZE = 3;
  
  let attack = Array(BOARD_SIZE)
    .fill(null)
    .map(() => Array(BOARD_SIZE).fill("x"));

  return attack.map((row) => row.join(" ")).join("\n");
}

console.log(userAttack());
