// class Volvo implements Car {
//      color = 'blue';
//      wheels = 4;
//      start(): void {
//           console.log('Go foward!')
//      }
// }
var Volvo = /** @class */ (function () {
    function Volvo(c) {
        this.wheels = 4;
        this.color = c; // 생성자 생성시 법칙
    } // 생성자를 통해 컬러값은 입력을 받아 클래스를 생성할 것이다. 생성자를 통해 값을 달리하는 객체(class)를 생성할 수 있는것
    Volvo.prototype.start = function () {
        console.log('Go forward!');
    };
    return Volvo;
}());
var car1 = new Volvo('blue');
car1.color = 'yellow';
var kia = {
    color: 'black',
    wheels: 4,
    start: function () {
        console.log('Go forward!');
    },
    electricity: function () {
        console.log('faster');
    },
    name: 'mini' // from interface Toy
};
console.log(kia);
kia.electricity();
