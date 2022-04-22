// function/practice.js
const numbers = [23, 45, 32, 55, 34, 72];

let sum = 0;

//기본 자바에서 사용한 반복문
for(let i=0; i<numbers.length; i++) {
  if(numbers[i]%2 ==0 ) {
    sum += numbers
  }
};

// 확장for문 사용
for(let number of numbers) {
  if(number %2==0) {
    sum += number;
  }
}

// 함수표현식으로 작성
// let evenSum = function(param){
//   if(param % 2 ==0) {
//     sum += param;
//   }
// };
let evenSum = (param) => {
  if(param % 2 ==0) {
    sum += param;
  }
};

// 짝수값만 가지고 와서 더하기
// numbers.forEach(evenSum);
// numbers.forEach(evensum);과 같은 문장
 numbers.forEach((param) => {
   if(param % 2 ==0) {
     sum += param;
   }
 });

numbers.forEach(function(param,idx){
  console.log(param,idx);
  if(param % 2 ==0) {
    sum+= param;
  }
});

console.log('합: ' + sum);

console.log('합: ' + sum);