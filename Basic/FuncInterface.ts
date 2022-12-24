interface Add {
     (num1: number, num2: number): number;
}// 함수 인터페이스, num1,num2 숫자를 인자로 받고 number을 리턴한다.

const addFunc: Add = function (a, b) {
     return a + b;
} // 인터페이스 선언 후, 인터페이스를 사용하는 함수 정의.

addFunc(1, 3); //가능
// addFunc(2,2,2) // 불가능

interface IsAdult {
     (age: number): boolean;
}

const isAdult: IsAdult = (num) => {
     return num > 19;
}

let you: boolean = isAdult(22);
let she: boolean = isAdult(18);

console.log(you, she)
