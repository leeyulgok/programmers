// 최대공약수와 최소공배수
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

function gcd(a, b) {
    if(b === 0) return a;
    return gcd(b, a % b);
}

function solution(n, m) {
  var answer = [];
  answer[0] = gcd(n, m);
  answer[1] = n * m / answer[0];
  return answer;
}

console.log(solution(3, 12));

// 문제의 핵심
// 최대공약수는 유클리드 호제법으로 풀면 된다.
// 최소공배수는 두 수의 곱에서 최대공약수를 나누면 된다.
// 유클리드 호제법의 원리는 두 수가 서로 나눠서 나머지를 구한다. 만약 나머지가 0이면 그 수가 최대 공약수가 되는것이다.