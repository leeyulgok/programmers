// 이중 우선순위 큐
// 이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.
// 명령어	수신 탑(높이)
// I 숫자	큐에 주어진 숫자를 삽입합니다.
// D 1	큐에서 최댓값을 삭제합니다.
// D -1	큐에서 최솟값을 삭제합니다.

// 이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때,
// 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 solution 함수를 구현해주세요.

function solution(operations) {
  let queue = [];

  for (const operation of operations) {
    const oper = operation.split(" ")[0];
    const number = Number(operation.split(" ")[1]);

    if (oper === "I") {
      queue.push(number);
    } else {
      if (number === 1) {
        const max = Math.max(...queue);
        queue = queue.filter((item) => item !== max);
      } else {
        const min = Math.min(...queue);
        queue = queue.filter((item) => item !== min);
      }
    }
  }

  let answer = []
  if(queue.length === 0) {
    answer = [0, 0]
  } else {
    const max = Math.max(...queue);
    const min = Math.min(...queue);

    answer = [max, min];
  }

  return answer;
}

console.log(
  solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])
);
console.log(
  solution([
    "I -45",
    "I 653",
    "D 1",
    "I -642",
    "I 45",
    "I 97",
    "D 1",
    "D -1",
    "I 333",
  ])
);
