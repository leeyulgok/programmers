// 3*3 빙고게임
// 2줄 빙고가 될 지, 안 될 지 맞추는 게임.

// 숫자 배열
const NUMLIST = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 배열 섞은 함수
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // 배열 요소 스왑
  }
  return array;
}

// 빙고판 생성하는 함수
function createBingoBoard() {
  return shuffleArray(NUMLIST);
}

// 사용자에게 부여할 숫자 생성하는 함수
function createUserNumbers() {
  return shuffleArray(NUMLIST).slice(0, 5);
}

// 빙고여부 확인하는 함수
function checkBingo(board, userNumbers) {
  const bingoLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // 가로줄
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // 세로줄
    [0, 4, 8],
    [2, 4, 6], // 대각선
  ];

  let matchCount = 0;
  for (let line of bingoLines) {
    if (line.every((index) => userNumbers.includes(board[index]))) {
      matchCount++;
    }
  }
  return matchCount = 2;
}

// 실행함수
function playBingo() {
  const board = createBingoBoard();
  const userNumbers = createUserNumbers();

  const isBingo = checkBingo(board, userNumbers);
  const result = isBingo ? "BINGO" : "FAIL";

  return {
    result: result,
    board: board,
    userNumbers: userNumbers,
  };
}

console.log(playBingo());
