// 삼총사
// 한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다.
// 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다.
// 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때,
// 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다.
// 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다.
// 한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때,
// 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

function solution(number) {
  number.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < number.length - 2; i++) {
    let left = i + 1;
    let right = number.length - 1;

    while (left < right) {
      let sum = number[i] + number[left] + number[right];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        if (number[left] === number[right]) {
          count += ((right - left + 1) * (right - left)) / 2;
          break;
        } else {
          let leftCount = 1;
          let rightCount = 1;
          while (left + 1 < right && number[left] === number[left + 1]) {
            left++;
            leftCount++;
          }
          while (right - 1 > left && number[right] === number[right - 1]) {
            right--;
            rightCount++;
          }
          count += leftCount * rightCount;
          left++;
          right--;
        }
      }
    }
  }

  return count;
}

console.log(solution([0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]));
