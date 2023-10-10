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

  let attacked = false;

  for (let i = 0; i < BOARD_SIZE - 2; i++) {
    for (let j = 0; j < BOARD_SIZE - 2; j++) {
      let applyAttack = false;

      if (attacked) break;

      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          if (board[i + x][j + y] === "O" && attackPattern[x][y] === "x") {
            applyAttack = true;
            break;
          }
        }
        if (applyAttack) break;
      }

      if (applyAttack) {
        for (let x = 0; x < 3; x++) {
          for (let y = 0; y < 3; y++) {
            if (attackPattern[x][y] === "x") {
              board[i + x][j + y] = "x";
            }
          }
        }
        attacked = true; // 공격이 발생하면 attacked를 true로 설정
      }
    }
    if (attacked) break;
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
const displayBoard = (board) => board.map((row) => row.join(" ")).join("\n");

const playGame = (preResult = "") => {
  let Message = `${displayBoard(board)}
적이 생성되었습니다. 공격을 통해 적을 물리치세요. 남은 적 : 5
공격하기(Y/N) : `;

  if (preResult) {
    Message = `${displayBoard(board)}\n${preResult}\n공격하기(Y/N) : `;
  }

  rl.question(Message, (answer) => {
    if (answer.toLowerCase() === "y") {
      const result = checkAttack(board);
      board = result.board.split("\n").map((row) => row.split(" "));

      if (result.remaining === 0) {
        console.log(`${result.board}
        모든 적이 제거되었습니다! 게임을 종료합니다.`);
        rl.close();
      } else {
        playGame(`남은 적: ${result.remaining}`);
      }
    } else if (answer.toLowerCase() === "n") {
      console.log("게임을 종료합니다.");
      rl.close();
    } else {
      console.log("잘못된 입력입니다. 다시 입력해주세요.");
      playGame(preResult);
    }
  });
};

playGame();
