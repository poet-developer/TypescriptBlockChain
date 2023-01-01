// 나머지 인자 함수
// 인자를 개수 상관없이 넣고 ...로 호출하면 배열로 반환해 계산에 적용된다.

function addAll(...nums: number[]): void {
     console.log(nums.reduce((result, num) => result + num, 0));
}

//reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
//arr.reduce(callback[, initialValue])

addAll(1, 3);
addAll(1, 2, 3, 4, 5, 6);
