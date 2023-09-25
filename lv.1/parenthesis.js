// 괄호
// 다음은 여러 종류의 괄호 (소괄호 (), 중괄호 {}, 대괄호 [])를 포함한 문자열이 주어집니다.
// 이 문자열이 올바르게 닫힌 괄호를 사용하여 작성되었는지 확인하세요.

function solution(s) {
    var stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for(let char of s) {
        if(char in mapping) {
            const topChar = stack.length === 0 ? '#' : stack.pop();
            if(mapping[char] !== topChar){
                return false;
            }
        } else {
            stack.push(char);
        }
    };
    
    return stack.length === 0;
}

console.log(solution('({[]})'));
console.log(solution('{[]]}'));