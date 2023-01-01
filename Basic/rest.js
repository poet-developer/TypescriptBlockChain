// 나머지 인자 함수
// 인자를 개수 상관없이 넣고 ...로 호출하면 배열로 반환해 계산에 적용된다.
function addAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    console.log(nums.reduce(function (result, num) { return result + num; }, 0));
}
addAll(1, 3);
addAll(1, 2, 3, 4, 5, 6);
