//string/basic3.js
//'hello', "hello", `hello` => 모두 문자열
let str1 = 'hello';

console.log(`${str1}`);
let str2 = `Welcome 
to my home,
This is my house.`;
console.log(str2); //``은 줄바꿈도 가능하고 출력됐을 때도 줄바꿈이 유지된다
str2 = 'Welcom\nto my house\n This is my \n house!'; //이렇게 일일이 줄바꿈 해줄 필요가 없어진다

let age = 22;
console.log(`${age>20? '성인':'청소년'}`); //age의 값이 20보다 큰지 체크해서? 크면 성인 작으면 청소년 출력, ``안에 간단한 표현식을 쓸 수 있다


