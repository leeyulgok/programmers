// 야구게임 - 임의의 숫자 3자리를 입력해서 맞추는 게임
const readline = require("readline");

function createNumber() {
  return Math.floor(Math.random() * (999 - 100) + 100).toString();
}

function checkNumber(number, userNumber) {
  let strikes = 0;
  let balls = 0;

  for (let i = 0; i < 3; i++) {
    if (number[i] === userNumber[i]) {
      strikes++;
    } else if (number.includes(userNumber[i])) {
      balls++;
    }
  }

  if (strikes === 3) {
    return "SUCCESS";
  } else if (strikes === 0 && balls === 0) {
    return "하나도 맞추지 못했습니다.";
  } else {
    return `${userNumber}는 ${strikes}스트라이크 ${balls}볼 입니다.`;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let ATTEMPTS = 5;
const number = createNumber();

const askQuestion = (previousResult = "") => {
  let questionMsg = "100~999사이의 숫자를 입력해주세요 : ";

  if (previousResult) {
    questionMsg = `${previousResult} 남은 기회 ${ATTEMPTS} : `;
  }

  rl.question(questionMsg, (answer) => {
    const result = checkNumber(number, answer);

    if (result === "SUCCESS" || ATTEMPTS <= 1) {
      if (ATTEMPTS <= 1 && result !== "SUCCESS") {
        console.log("LOOSE");
      }
      rl.close();
    } else {
      ATTEMPTS--;
      askQuestion(result);
    }
  });
};

askQuestion();
