// 문자열 그룹핑 (해시 테이블 사용)
// 주어진 문자열 배열에서, 각 문자열을 정렬했을 때 같은 문자들로 이루어진 문자열끼리 그룹핑하세요.
// 반환값은 2차원 배열이며, 각 그룹은 하나의 배열로 표현되어야 합니다.

class hastTable {
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
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push(value);
  }

  getValues() {
    return this.table.filter(Boolean);
  }
}

function solution(list) {
    const hashTable = new hastTable();
    list.forEach(str => {
      const sorted = str.split('').sort().join('');
      hashTable.set(sorted, str);
    });
  
    return hashTable.getValues();
}

console.log(solution(["eat", "tea", "tan", "ate", "nat", "bat"]));
