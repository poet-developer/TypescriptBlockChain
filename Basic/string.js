// string return func
function hello(name) {
    return "hello, ".concat(name || 'world', "!");
}
function hello2(name) {
    if (name === void 0) { name = 'world'; }
    return "hello, ".concat(name, "!");
}
function hello3(age, name) {
    console.log("hello, ".concat(name, ". you are ").concat(age, "."));
}
console.log(hello('iro'));
console.log(hello());
console.log(hello2());
console.log(hello3(undefined, 'soo'));
