// 전화번호부

function solution(phone_book) {
  const hashMap = {};

  for (const number of phone_book) {
    hashMap[number] = true;
  }

  for (const number of phone_book) {
    for (let i = 1; i < number.length; i++) {
      const prefix = number.slice(0, i);
      if (hashMap[prefix]) {
        return false;
      }
    }
  }

  return true;
}

console.log(solution(["119", "97674223", "1195524421"]));
console.log(solution(["123", "456", "789"]));
