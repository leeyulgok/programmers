const readline = require("readline");

function createBoard() {
  const initailChars = [
    "S",
    ...Array(3).fill("A"),
    ...Array(7).fill("B"),
    ...Array(14).fill("C"),
  ];
  return shuffleArray(initailChars);
}

function shuffleArray(board) {
  for(let i = board.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [board[i], board[j]] = [board[j], board[i]];
  }
  return board;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("1~25사이의 숫자 중 3개를 입력하세요.", (answer) => {
  const userNumbers = answer.split(" ").map(Number);
  const result = playGame(userNumbers);
  console.log(`결과: ${result.join(", ")}`);
  rl.close();
});
