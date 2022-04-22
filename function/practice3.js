//practice3.js

const person1 = {
  fullName: 'Hong',
  age:20,
  height:175.3
}
const person2 = {
  fullName: 'Hwang',
  age:22,
  height:178.3
}
const person3 = {
  fullName: 'Park',
  age:25,
  height:155.3
}

const persons = [person1, person2, person3];

// map이라는 메소드는 기능을 실행하고 실행한 결과값을 배열에 담아준다 : 배열타입(새로운 배열을 만들어준다)
const newPersons = persons.map(function (val,idx){ 

  let newObj = {}; //새로운 오브젝트타입을 선언 & 오브젝트에 속성(필드)들을 추가할 수 있다
  newObj.index = idx + 1; //newObj라는 새로운 오브젝트에 index라는 이름으로 idx값을 담아준다
  newObj.fName = val.fullName; //newObj라는 새로운 오브젝트에 val의 fullName값을 fName이라는 이름으로 담아준다
  newObj.age = val.age;
  newObj.height = val.height;
// return구문이 없으면 undefined 으로 반환해준다
  return newObj;
});
console.log(newPersons); //이름만 담겨져있는 배열이 콘솔에 출력된다

// ----------------------------
//함수정의문
function tableList(personAry) {
  document.write('<table border=1>');
  document.write(`<tr><th>순번</th><th>이름</th><th>나이</th><th>키</th></tr>`);
    for(let person of personAry) { //테이블 line생성
      document.write('<tr>');
        for(let field in person) { //칼럼생성
          document.write(`<td>${person[field]}</td>`);

        }
      document.write('</tr>');

    }
  document.write('</table>');
}
//함수실행=>*호출*
tableList(newPersons);