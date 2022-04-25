//array/basic.js

//배열선언: [], new Array();
let arr = [1,2];
let newAry = [3,4,5,6];

//추가= push:제일 마지막 위치에 하나씩 추가, unshift:앞쪽부터 하나씩 추가
arr.push(3);
arr.unshift(0);

//제거= pop(); :뒤에서부터 하나씩 제거, shift(); :처음부터 하나씩 제거
arr.pop();
arr.shift();

//새로운 배열을 추가 = forEach
newAry.forEach(function (elem) {
  arr.unshift(elem); //6,5,4,3,1,2
});

arr.pop(); //6,5,4,3,1
arr.shift(); //5,4,3,1
arr.pop(); //5,4,3

//splice(위치,크기,대체값) : 추가&수정&삭제 가능
// arr.splice(1,1,8,9); index 1번 자리에서 2의 크기를 8,9로 대체한다 => 4,3을 8,9로 대체한다
// arr.splice(1,0,8,9); index 1번 자리에서 0의 크기를 8,9로 대체한다 => 5,8,9,4,3
// arr.splice(1,2); index 1번 자리에서 2의 크기를 *대체값이 오지 않았다* => 2의크기만큼 삭제된다
arr.splice(2,2,4);
newAry.forEach(function (elem) {
  arr.splice(1,1,elem); // 5,6,5,4,3,4,4
                        //5,6,4
})

let names = [];
let anonym = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A molestiae maxime eveniet facilis rerum asperiores quaerat ex Lorem ipsum dolor sit amet consectetur, adipisicing elit. A molestiae maxime eveniet facilis rerum asperiores quaerat ex iusto eum, ratione temporibus dolorem veniam deleniti fugit accusantium id distinctio eligendi minima.'
anonym.split(' ').forEach(function (elem) {
  names.push(elem);
});
console.log(names.toString()); //배열, 배열, ...
console.log(names);

//forEach() : 반환값은 없다
//map() : 각 요소에 해당되는 값을 mapping작업을 해서 다른 형태로 반환(새로운 배열을 만든다)
//filter() : return 조건을 만족하는 값만 반환해서 새로운 배열을 만든다
let result = names.map(function (elem) {
  return elem.toUpperCase();
}); //새로운 배열 생성

result = result.filter(function (elem) {
  return elem.length >= 10;
}); //단어의 길이가 10 이상인 값들만 가져온다

//==>매소드를 이어서 한 문장으로 써보면
result = names.map(elem => elem.toUpperCase()).filter(elem => elem.length >= 10); 
console.log(result);
