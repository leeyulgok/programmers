// 야근지수
// https://school.programmers.co.kr/learn/courses/30/lessons/12927

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return max;
  }

  heapifyUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (index > 0 && this.heap[parentIndex] < this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      [this.heap[largest], this.heap[index]] = [
        this.heap[index],
        this.heap[largest],
      ];
      this.heapifyDown(largest);
    }
  }
}

function solution(works, n) {
  let heap = new MaxHeap();
  works.forEach((work) => heap.insert(work));

  for (let i = 0; i < n; i++) {
    let maxWork = heap.extractMax();
    if (maxWork === null || maxWork === 0) break;
    heap.insert(maxWork - 1);
  }

  return heap.heap.reduce((acc, cur) => acc + cur * cur, 0);
}

console.log(solution([4, 3, 3], 4));
console.log(solution([2, 1, 2], 1));
console.log(solution([1, 1], 3));
