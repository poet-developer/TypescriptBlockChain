// string return func

function hello(name?: string): string {
     return `hello, ${name || 'world'}!`;
}

function hello2(name = 'world'): string {
     return `hello, ${name}!`;
}

function hello3(age: number | undefined, name: string): void {
     console.log(`hello, ${name}. you are ${age}.`);
}

console.log(hello('iro'));
console.log(hello());
console.log(hello2());
console.log(hello3(undefined, 'soo'));