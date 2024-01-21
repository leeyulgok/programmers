// 압축
// https://school.programmers.co.kr/learn/courses/30/lessons/17684?language=javascript

function solution(msg) {
  const dictionary = initializeDictionary();
  const result = [];
  let currentString = "";

  for (let i = 0; i < msg.length; i++) {
    const currentChar = msg[i];
    const candidateString = currentString + currentChar;

    if (dictionary[candidateString] !== undefined) {
      currentString = candidateString;
    } else {
      result.push(dictionary[currentString]);

      dictionary[candidateString] = Object.keys(dictionary).length + 1;
      currentString = currentChar;
    }
  }

  result.push(dictionary[currentString]);

  return result;
}

function initializeDictionary() {
  const dictionary = {};
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < alphabet.length; i++) {
    const character = alphabet.charAt(i);
    dictionary[character] = i + 1;
  }

  return dictionary;
}

console.log(solution("KAKAO"));
console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));
console.log(solution("ABABABABABABABAB"));
