const readline = require("readline");

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
