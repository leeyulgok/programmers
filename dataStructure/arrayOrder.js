// 배열
// 배열 순서 정하기

function solution(arr) {
    return arr.sort((a, b) => {
        const lengDiff = a.length - b.length;
        if(lengDiff === 0) {
            return a.localeCompare(b);
        }
        return lengDiff;
    })
}

console.log(
  solution([
    "apple",
    "grape",
    "banana",
    "cherry",
    "kiwi",
    "watermelon",
    "orange",
  ])
);

// sort() 이해하기
// a와 b를 비교 함수에 전달합니다.
// 비교 함수가 음수를 반환하면, a가 b보다 낮은 인덱스에 배치됩니다 (즉, a가 b보다 앞에 옵니다).
// 비교 함수가 양수를 반환하면, a가 b보다 높은 인덱스에 배치됩니다 (즉, a가 b보다 뒤에 옵니다).
// 비교 함수가 0을 반환하면, a와 b의 순서는 변경되지 않습니다.