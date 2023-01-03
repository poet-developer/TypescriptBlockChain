function callHer(name, age) {
    if (typeof age === "number") {
        return {
            name: name,
            age: age
        };
    }
    else {
        return "나이는 숫자를 입력!";
    }
} // Validator, 분기 처리
//***overload사용 : 전달받은 매게변수 개수나 타입에 따라 다른동작 하게 하도록 함, 해당 함수 위에 똑같이 작성.
var mySister = callHer('soo', 24);
var iro = callHer('iro', '30');
console.log(mySister, iro);
