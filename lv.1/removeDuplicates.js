// 해시 테이블
// 다음과 같은 문자열 배열이 주어졌을 때,
// 중복된 문자열을 제거한 후의 배열을 반환하는 함수를 작성하세요.

class HashTable {
  constructor(size = 100) {
    this.table = new Array(size);
  }

  _hash(key) {
    let hash = 17;
    for (let i = 0; i < key.length; i++) {
      hash = (13 * hash * key.charCodeAt(i)) % this.table.length;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    this.table[index] = value;
  }

  get(key) {
    const index = this._hash(key);
    return this.table[index];
  }
}

function removeDuplicates(strArr) {
  const hashTable = new HashTable();

  const result = [];

  for (let i = 0; i < strArr.length; i++) {
    const word = strArr[i];

    if (hashTable.get(word) === undefined) {
      hashTable.set(word, true);
      result.push(word);
    }
  }

  return console.log(result);
}

removeDuplicates([
  "apple",
  "banana",
  "orange",
  "apple",
  "mango",
  "banana",
  "grape",
  "orange",
  "mango",
]);
