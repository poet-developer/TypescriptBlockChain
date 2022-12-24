type Score = 'A' | 'B' | 'C' | 'F'; // grade의 scope 설정 이 타입으로 선언된 프로퍼티는 해당 값만 가질 수 있다.

interface User {
     name: string;
     age: number;
     gender?: string //있어도 되고 없어도 되는 프로퍼티는 ?로 선언한다.
     readonly birth: number; // 읽기전용 프로퍼티 : 선언 이후 수정 불가능
     [grade: number]: Score; // number 인덱스 선언
}

let user: User = {
     name: 'poetdeveloper',
     age: 2,
     birth: 1234,
     1: 'A',
     2: 'B',
     5: 'C',
}

user.age = 10; // 가능
user.gender = 'female'; // 가능
// user.birth = 2222; // 불가능

console.log(user.age, user.name, user.gender)