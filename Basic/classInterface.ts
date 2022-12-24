
// implements : 인터페이스로 클래스를 정의할 때 사용한다.
interface Car {
     color: string;
     readonly wheels: number;
     start(): void; // 함수라는 표시를 프로퍼티 ()에 해줄것, 함수 인터페이스와 다름에 주의
}

// class Volvo implements Car {
//      color = 'blue';
//      wheels = 4;
//      start(): void {
//           console.log('Go foward!')
//      }
// }

class Volvo implements Car {
     constructor(c: string) {
          this.color = c; // 생성자 생성시 법칙
     } // 생성자를 통해 컬러값은 입력을 받아 클래스를 생성할 것이다. 생성자를 통해 값을 달리하는 객체(class)를 생성할 수 있는것
     color;
     wheels = 4;
     start(): void {
          console.log('Go forward!')
     }
}

const car1 = new Volvo('blue');
car1.color = 'yellow'
// console.log(car1)

//extends

interface Toy {
     name: string
}

interface Kia extends Car, Toy {
     // 그대로 Car 기본 속성을 상속 받아 확장시킨다.
     electricity(): void;
}// 여러개의 인터페이스를 사용해 확장할 수도 있다.

const kia: Kia = {
     color: 'black',
     wheels: 4,
     start(): void {
          console.log('Go forward!');
     },// from interface Car
     electricity(): void {
          console.log('faster!');
     }, // from interface Kia
     name: 'mini' // from interface Toy
}

console.log(kia)
kia.electricity();