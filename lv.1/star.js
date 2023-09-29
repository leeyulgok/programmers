// 직사각형 별 만들기

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  for(let i = 0; i < b; i++) {
    var answer = '';
    for(let j = 0; j < a; j++) {
        answer += '*'
    }
    console.log(answer);
  }
});

// 효율적인 풀이
// repeat() 메서드 활용
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }

});