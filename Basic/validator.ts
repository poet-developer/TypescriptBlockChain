interface Sister {
     name: string;
     age: number;
}

// 객체가 아니라 인터페이스임 ','를 사용하지 않아도 된다.

function callHer(name: string, age: string): string;
function callHer(name: string, age: number): Sister;
function callHer(name: string, age: number | string): Sister | string {
     if (typeof age === "number") {
          return {
               name,
               age,
          };
     } else {
          return "나이는 숫자를 입력!"
     }
} // Validator, 분기 처리
//***overload사용 : 전달받은 매게변수 개수나 타입에 따라 다른동작 하게 하도록 함, 해당 함수 위에 똑같이 작성.
const mySister: Sister = callHer('soo', 24);
const iro: string = callHer('iro', '30');

console.log(mySister, iro)