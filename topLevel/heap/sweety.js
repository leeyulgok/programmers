// 더 달게
// Jin이는 여러 가지 과자를 가지고 있습니다.각 과자는 그 자체의 달콤함 수치를 가지고 있습니다.
// 그는 이 과자들을 섞어 더 달콤한 과자를 만들려고 합니다. 그러나 그는 아래와 같은 특별한 규칙으로만 과자를 섞을 수 있습니다.
// 가장 달콤하지 않은 두 개의 과자를 골라 섞는다.
// 섞은 과자의 달콤함 수치 = 가장 달콤하지 않은 과자의 달콤함 + (두 번째로 달콤한 과자의 달콤함 * 2)
// Jin은 모든 과자를 섞어서 최종적으로 가능한 가장 높은 달콤함 수치를 얻고자 합니다.
// 과자의 달콤함 수치를 담은 배열 sweetness가 주어질 때,
// 모든 과자를 섞어서 얻을 수 있는 최대 달콤함 수치를 반환하는 solution 함수를 작성하세요.

function solution(sweetness) {
  const heap = [];
  let max = 0;

  for(const s of sweetness) {
    insert(heap, s);
  }

  while(heap.length > 0) {
    const first = remove(heap);
    const second = remove(heap);
    
    let newSweetness = first + second * 2;
    insert(heap, newSweetness);

    if(heap.length === 1) {
      max = heap[0];
      break;
    }
  }

  return max;
}

function insert(heap, value) {
  heap.push(value);
  let i = heap.length - 1;
  while (i > 0 && heap[Math.floor(i - 1 / 2)] > heap[i]) {
    [heap[i], heap[Math.floor(i - 1 / 2)]] = [
      heap[Math.floor(i - 1 / 2)],
      heap[i],
    ];
    i = Math.floor(i - 1 / 2);
  }
}

function remove(heap) {
  const value = heap[0];
  heap[0] = heap[heap.length - 1];
  heap.pop();

  let i = 0;
  while (true) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let smallest = i;

    if (left < heap.length && heap[left] < heap[smallest]) {
      smallest = left;
    }

    if (right < heap.length && heap[right] < heap[smallest]) {
      smallest = right;
    }

    if (smallest === i) break;

    [heap[i], heap[smallest]] = [heap[smallest], heap[i]]
    i = smallest;
  }

  return value;
}

console.log(solution([1, 2, 3, 9, 10, 12]));