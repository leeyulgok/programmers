// 호기심 1 - 게임을 하면서 알고 싶었던 알고리즘
// 게임을 할 때 레벨업을 하기 위해서 경험치 물약을 마시는데 효율적으로 마시기 위한 코드는 어떻게 될까?

// 예를 들어, 레벨업을 하기 위한 경험치가 111이 필요하다고 할 때
// 경험치 물약은 대, 중, 소로 각각 10, 5, 3씩 채워준다면 레벨업을 할 때 필요한 물약의 최소 갯수는 몇 개일까?
// 꼭 레벨업을 해야 하니까 필요한 경험치보다 넘어도 되는데, 최소한으로 넘어야 한다.

function solution(exp) {
    const LARGE = 10;
    const MIDDLE = 5;
    const SMALL = 3;
    
    let answer = [0, 0, 0];

    answer[0] = Math.floor(exp / LARGE);
    exp -= answer[0]  * LARGE;

    answer[1] = Math.floor(exp / MIDDLE);
    exp -= answer[1]  * MIDDLE;

    answer[2] = Math.ceil(exp / SMALL);

    return answer;
}

console.log(solution(88));

// 이는 그리디 알고리즘 활용
// 그리디 알고리즘은 최적화 문제를 해결하기 위한 알고리즘