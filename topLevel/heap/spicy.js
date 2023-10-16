// 더 맵게
// 매운 것을 좋아하는 Leo는 모든 음식의 스코빌 지수를 K 이상으로 만들고 싶습니다.
// 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해,
// Leo는 스코빌 지수가 가장 낮은 두 개의 음식을 아래와 같이 특별한 방법으로 섞어 새로운 음식을 만듭니다.
// 섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
// Leo는 모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복하여 섞습니다.
// Leo가 가진 음식의 스코빌 지수를 담은 배열 scoville과 원하는 스코빌 지수 K가 주어질 때,
// 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수를 return 하도록 solution 함수를 작성해주세요.

function solution(scoville, K) {
  const heap = [];
  let mixCount = 0;

  for (const s of scoville) {
    insert(heap, s);
  }

  while (heap.length > 1 && heap[0] < K) {
    const first = remove(heap);
    const second = remove(heap);

    const newScoville = first + second * 2;
    insert(heap, newScoville);

    mixCount++;
  }

  if (heap[0] < K) return -1;
  return mixCount;
}

function insert(heap, value) {
  heap.push(value);
  let i = heap.length - 1;
  while (i > 0 && heap[Math.floor((i - 1) / 2)] > heap[i]) {
    [heap[i], heap[Math.floor((i - 1) / 2)]] = [
      heap[Math.floor((i - 1) / 2)],
      heap[i],
    ];
    i = Math.floor((i - 1) / 2);
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

    [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
    i = smallest;
  }

  return value;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));
