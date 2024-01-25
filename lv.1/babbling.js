// 옹알이(2)
// https://school.programmers.co.kr/learn/courses/30/lessons/133499

// 조합을 사용. 연속된 건 X
function solution(babbling) {
  const baby = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  for(const word of babbling) {
    let char = '';
    let arr = [];
    for(let i = 0; i < word.length; i++) {
      char += word[i];
      if(baby.includes(char)) {
        if(arr.length === 0 || char !== arr[arr.length - 1]) {
          arr.push(char);
          char = '';
        } else {
          break;
        }
      }
    }

    if(char.length === 0) {
      answer += 1;
    }
  }

  return answer;
};

console.log(solution(["aya", "yee", "u", "maa"]));
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	));
