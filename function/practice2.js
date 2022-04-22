// practice2.js

//  {}안의 내용을 오브젝트라고 한다(자바에서의 인스턴스of클래스와 비슷한 개념) & 참조타입값이다
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

// 배열형식으로 보이지만 오브젝트이다
const persons = [person1, person2, person3];

let avgAge = 0;
let sum = 0;
for(let person of persons) {
  sum += person.age;
}
avgAge = sum / persons.length;
console.log(`평균나이: ${avgAge}`)

console.clear;
// 같은 결과값 출력 문장
sum = 0;
// val에는 person요소가 들어있다
persons.forEach(function (val) {
  // 이름,나이,키 중에서 나이 요소를 가져오겠다
  sum += val.age;
});

let avgAgeFnc = function (val) {
  sum += val.age; //val에서 age라는 key를 가지고 와서 더한다
};
let avgHeightFnc = function (val) {
  sum += val.height;
}

persons.forEach(avgHeightFnc);

avgAge = sum / persons.length;
console.log(`평균키: ${avgAge}`)

//sum은 let avgHeightFnc = function (val) {sum += val.height;}에서 나온 sum이다=> 그러니까 sum값에 키의 값이 담겨져 있으니까 0으로 초기화를 해주어야 한다
sum=0;
// avgAgeFnc라는 함수를 호출한다
// persons에 있는 값만큼 더한다
persons.forEach(avgAgeFnc);
avgAge = sum / persons.length;
console.log(`평균나이: ${avgAge}`)

// ---------------------------
// forEach(function (val,idx,ary)) => val:값을 가져온다 idx:순서를 가져온다(0,1,2..) ary:담겨있는 값의 식을 가져온다
let tag=""; //tag라는 변수에 빈 공간을 할당
let allPerson=function (val,idx) {
  if(idx == 0) { //index값의 첫번째 값에 ul태그를 붙여준다
    tag += '<ul>'; //tag가 빈 공간이니까 ul태그를 넣어준다
  }
  tag += `<li> ${val.fullName}, ${val.age}, ${val.height} </li>`;
  if(idx==persons.length-1) { //배열의 크기는 index값+1이니까 -1을 해주고
  tag += '</ul>';
  }
};

let over170 = function(val,idx) {
  console.log(val,idx) //콘솔에 val,idx값을 출력해봄
  if(idx == 0) { //index값의 첫번째 값에 ul태그를 붙여준다
    tag += '<ul>';
  }
  if(val.height>=170)
    tag += `<li> ${val.fullName}, ${val.age}, ${val.height} </li>`;
  if(idx==persons.length-1) { //배열의 크기는 index값+1이니까 -1을 해주고
    tag += '</ul>';
  }
}
persons.forEach(over170);

// ------------------------------------
 persons.forEach(function (val,idx) {
   if(idx == 0) { //index값의 첫번째 값에 ul태그를 붙여준다
     tag += '<ul>';
   }
   tag += `<li> ${val.fullName}, ${val.age}, ${val.height} </li>`;
   if(idx==persons.length-1) { //배열의 크기는 index값+1이니까 -1을 해주고
   tag += '</ul>';
   }
 });
console.log(tag);
document.write(tag);
