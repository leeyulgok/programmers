// 뉴스 클러스터링
// 여러 언론사에서 쏟아지는 뉴스, 특히 속보성 뉴스를 보면 비슷비슷한 제목의 기사가 많아 정작 필요한 기사를 찾기가 어렵다.
// Daum 뉴스의 개발 업무를 맡게 된 신입사원 튜브는 사용자들이 편리하게 다양한 뉴스를 찾아볼 수 있도록 문제점을 개선하는 업무를 맡게 되었다.

// 자카드 유사도는 집합 간의 유사도를 검사하는 여러 방법 중의 하나로 알려져 있다.
// 두 집합 A, B 사이의 자카드 유사도 J(A, B)는 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값으로 정의된다.
// 예를 들어 집합 A = {1, 2, 3}, 집합 B = {2, 3, 4}라고 할 때,
// 교집합 A ∩ B = {2, 3}, 합집합 A ∪ B = {1, 2, 3, 4}이 되므로,
// 집합 A, B 사이의 자카드 유사도 J(A, B) = 2/4 = 0.5가 된다.
// 집합 A와 집합 B가 모두 공집합일 경우에는 나눗셈이 정의되지 않으니 따로 J(A, B) = 1로 정의한다.

// 자카드 유사도는 원소의 중복을 허용하는 다중집합에 대해서 확장할 수 있다.
// 다중집합 A는 원소 "1"을 3개 가지고 있고, 다중집합 B는 원소 "1"을 5개 가지고 있다고 하자.
// 이 다중집합의 교집합 A ∩ B는 원소 "1"을 min(3, 5)인 3개, 합집합 A ∪ B는 원소 "1"을 max(3, 5)인 5개 가지게 된다.
// 다중집합 A = {1, 1, 2, 2, 3}, 다중집합 B = {1, 2, 2, 4, 5}라고 하면, 교집합 A ∩ B = {1, 2, 2},
// 합집합 A ∪ B = {1, 1, 2, 2, 3, 4, 5}가 되므로, 자카드 유사도 J(A, B) = 3/7, 약 0.42가 된다.

// 이를 이용하여 문자열 사이의 유사도를 계산하는데 이용할 수 있다.
// 문자열 "FRANCE"와 "FRENCH"가 주어졌을 때, 이를 두 글자씩 끊어서 다중집합을 만들 수 있다.
// 각각 {FR, RA, AN, NC, CE}, {FR, RE, EN, NC, CH}가 되며,
// 교집합은 {FR, NC}, 합집합은 {FR, RA, AN, NC, CE, RE, EN, CH}가 되므로,
// 두 문자열 사이의 자카드 유사도 J("FRANCE", "FRENCH") = 2/8 = 0.25가 된다.

function solution(str1, str2) {
  let newArrOne = newStringArr(str1);
  let newArrTwo = newStringArr(str2);

  const interNumber = intersection(newArrOne, newArrTwo);
  const unionNmber = union(newArrOne, newArrTwo);

  const jaccard = unionNmber === 0 ? 1 : interNumber / unionNmber;

  return Math.floor(jaccard * 65536);
}

function newStringArr(str) {
  const regex = /^[A-Za-z]{2}/;
  let lowerStr = str.toLowerCase();
  let newStr = [];

  for (let i = 0; i < lowerStr.length; i++) {
    let str = lowerStr.substr(i, 2);
    if (regex.test(str)) {
      newStr.push(str);
    }
  }

  return newStr;
}

function intersection(arr1, arr2) {
  let intersectionSet = [];
  let tempA = [...arr1];

  for (let item of arr2) {
    let index = tempA.indexOf(item);
    if (index !== -1) {
      intersectionSet.push(item);
      tempA.splice(index, 1);
    }
  }

  return intersectionSet.length;
}

function union(arr1, arr2) {
  const countMap = new Map();

  [arr1, arr2].forEach((arr) => {
    arr.forEach((item) => {
      countMap.set(
        item,
        Math.max(countMap.get(item) || 0, arr.filter((x) => x === item).length)
      );
    });
  });

  const result = [];
  countMap.forEach((count, item) => {
    for (let i = 0; i < count; i++) {
      result.push(item);
    }
  });

  return result.length;
}

console.log(solution("FRANCE", "french"));
console.log(solution("handshake", "shake hands"));
console.log(solution("aa1+aa2", "AAAA12"));
console.log(solution("E=M*C^2", "e=m*c^2"));
