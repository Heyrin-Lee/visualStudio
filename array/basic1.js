//array/basic1.js

//reduce(); map() ->새로운 배열, filter() -> return값이 참인 경우에만 새로운 배열
//reduce() -> 결과값이 지정하는 값으로 정할 수 있다. string,number 배열

const numbers = [23,4,77,51,63,34,62,92];

//배열요소의 누적합 구하기
let result = numbers.reduce(function (accum, elem, ind, ary) { //(초기값,value값(배열에 있는 요소),index,array)
  console.log(accum, elem,ind,ary); //0 23 0 배열요소
  accum = accum + elem; //0+23=accum =>반복하면서 누적된 값을 초기값으로 사용하겠다(처음 초기값:0, 두번째 초기값:23 ...)
  //= 같은 의미의 문장
  return accum += elem;
},0); //초기값을 0으로 설정

//배열요소의 *2의 값을 새로운 배열로 만들어본다
result = numbers.reduce(function (accum, elem) {
  accum.push(elem *2); //[46,8,154,,] accum에 elem의 2배의 값을 추가
  return accum; //그 배열을 return 한다
}, []); //처음의 초기값은 아무것도 없는 배열의 값으로 설정 

//filter:50보다 큰 숫자를 가지는 새로운 배열을 만들어본다
result = numbers.reduce(function (accum, elem) {
  if(elem >= 50) {
    accum.push(elem);
  } 
  return accum; //반환되는 값은 다음 순번의 초기값(accum);
}, []);
console.log(result);