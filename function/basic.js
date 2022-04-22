//function/basic.js파일

// java에서는 타입은 정의해줘야하지만 js에서는 정의하지 않아도 에러는 발생하지 않는다!정상적 처리는 안 될수 있음!
// function이라는 함수로 변수를 정해서 바로 사용하면 된다(변수선언도 필요없음)
// function을 사용할 때는 선언식/표현식으로 사용가능

// --1.선언식--
// *매개변수의 역할*
function sum(num1, num2) {
  console.log(num1, num2);
  // return해서 값을 반환한다고 명령문을 입력해야 결과값이 출력된다
  // *return문의 역할
  return num1 + num2;
}
// 위의 문장은 이와 같다(표현식으로 처리되는 것과 같은 결과이므로 같은 이름의 변수 사용불가) => let sum = function(num1, num2) {  }

// *인자값의 역할
let result = sum(10,20);
// *출력문
console.log('결과는 ' + result);
// --------------------------------

// --2.표현식--
// myfnc라는 변수를 지정(function정의 구문이 들어가있다)
let myfnc = function(val1, val2) {
  var myVal = 10;
  return val1 + val2 + myVal;
}
console.log(typeof myfnc, myfnc);
// myfnc이라는 변수에 10,20의 값을 담아서 return값을 반환하겠다
result = myfnc(10,20);
console.log(result);
// ------------------------------------

// mysum이라는 변수가 myfnc를 참조하고 있다 = 들어가는 인자의 수는 다를 수 지만 같은 function 식을 가지고 있다
// function은 오브젝트 타입
let mysum = myfnc;
result = mysum(20,30);
console.log(result);
// -----------------------------------
const person = {
  fullName: 'Hong',
  age:20,
  height:175.3
}
const person1 = {
  fullName: 'Hwang',
  age:22,
  height:178.3
}
const person2 = {
  fullName: 'Park',
  age:25,
  height:155.3
}

// 함수 표현식 myinfo
// 매개값으로 들어온 값(obj)이 person 타입과 같으면 person의 값들을 반환한다
let myInfo = function(obj) {
  var info = `${obj.fullName}이고 ${obj.age}살이고 키는 ${obj.height}입니다`;
  return info;
}

// 식은 info를 사용하고 안에 들어가는 값들은 person의 값들을 사용해서 결과값을 출력한다
result = myInfo(person);
console.log(result);
// persons라는 변수를 선언하고 배열안에 person(1~2)를 담는다
const persons = [person, person1, person2];
// 반복문 실행->배열을 활용해서 하나씩 꺼내서 출력
for(let pers of persons) {
  let result = myInfo(pers);
  console.log(result);
}
// ---------------------------------
console.clear();

// foreach: 배열에 들어있는 갯수 만큼 foreach(fucntion) function의 괄호에 정의된 함수의 기능을 실행하십시오!배열인 경우에만!
// ()속 첫번째, 두번째, 세번째 값은 value, index, aray
// foreach에 대해서 function자체를 매개값으로 사용할 수 있다
// 자바스크립트에서 문자열, 숫자, boolean, 배열 => 매개값으로 사용가능 & 함수를 매개변수로 사용가능
persons.forEach(function(val, ind, ary) { 
  // console.log(val, ind, ary);
  console.log(myInfo(val));
  });
// ----------------------------------

// 위와 같은 결과값이 출력된다
// 함수를 하나의 변수(funcParam)로 선언
let funcParam = function(val, ind, ary) { 
  // console.log(val, ind, ary);
  console.log(myInfo(val));
  };
 persons.forEach(funcParam); //메소드의 매개값으로 활용되는 함수 = 콜백함수

// // 람다표현식처럼 간단하게 식 표현하기
// let funcParam = (val,ind, ary) => { //화살표 함수..{}안에 있는 함수를 실행하세요 의미
//   console.log(myInfo(val));
// };
// persons.forEach(funcParam); 
// ------------------------




