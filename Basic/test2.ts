/**문자: String, 숫자: Number */
let color: string = "#00000"; // 문자
let fingers: number = 10; // 숫자
let check: boolean = true; // true or false

/**배열 : Array */
let a: number[] = [1, 2, 3]; // 숫자 배열 
let b: Array<number> = [4, 5, 6]; // 숫자 배열 
let colors: string[] = ['red', 'blue', 'green']; //문자배열
let fav: Array<string> = ['writing', 'art', 'books']; //문자 배열 다른 표현
let random: any[] = [1, false, 'shine']; // 모든 타입을 아이템으로 허용

/** 튜플 : Tuple */

let c: [String, Number];
c = ['1', 2];
// c = [1, '2'] Error.
c[0].toLowerCase();
//c[1].toLowerCase(); Error

/** void, never */

function nameless(): void {
     console.log('This is voild Func');
}// 아무것도 반환하지 않음 : void

function showError(): never {
     throw new Error;
} // 에러 반환 함수 : never

function infLoop(): never {
     while (true) {
          // do something.
     }
} // 무한 루프 함수 : never

/**  enum (js에는 없는 type) */
/**  특정값만 입력하게 강제하고, 값들의 공통점이 있어 분류를 하고 싶을때 enum 사용 */
enum Os {
     Window = 10,
     Ios,
     Android
}

let myOs: Os;
myOs = Os.Window
console.log(myOs, Os[10], Os['Window'], Os['Ios']) // 10, Window, 10, 11  


/** null, undefined */
let n: null = null;
let u: undefined = undefined
