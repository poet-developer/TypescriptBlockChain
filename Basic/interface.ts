interface Human {
     name: string;
}

const Me: Human = { name: 'iro' };

function showName(this: Human): void {
     console.log(this.name);
}
//this type은 맨앞에 쓴다.

const me = showName.bind(Me);
//bind를 통해 Me를 인자로 집어넣는중.

me();