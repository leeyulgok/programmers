// 효율적으로 공격하기
const readline = require("readline");

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

  return board;
}

// 유저 공격
function createAttackPattern() {
  const BOARD_SIZE = 3;

  let attack = Array(BOARD_SIZE)
    .fill(null)
    .map(() => Array(BOARD_SIZE).fill("x"));

  return attack.map((row) => row.join(" ")).join("\n");
}

// 유저 공격 확인
function checkAttack(board) {
  const BOARD_SIZE = 5;
  const attackPattern = createAttackPattern()
    .split("\n")
    .map((row) => row.split(" "));

  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (board[i][j] === "O") {
        for (let x = 0; x < 3 && i + x < BOARD_SIZE; x++) {
          for (let y = 0; y < 3 && j + y < BOARD_SIZE; y++) {
            if (attackPattern[x][y] === "x") {
              board[i + x][j + y] = "x";
            }
          }
        }
      }
    }
  }

  const remainingOs = board.flat().filter((cell) => cell === "O").length;
  const displayBoard = board.map((row) => row.join(" ")).join("\n");

  return {
    board: displayBoard,
    remaining: remainingOs,
  };
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let board = createBoard();

const playGame = (preResult = "") => {
  const Massege = `${board}
  적이 생성되었습니다. 공격을 통해 적을 물리치세요. 남은 적 : 5`;

  if (preResult) {
    Massege = preResult;
  }

  rl.question(Massege, (answer) => {
    let result = checkAttack();
    if (result === 0) {
      rl.close();
    } else {
      playGame(result);
    }
  });
};

playGame();
