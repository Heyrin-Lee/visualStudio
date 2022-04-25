//string/practice2.js

let sso = ['970101-1234567', '910101 1234567', '9701012234567', '970101/1234567'];

function checkGender(ssn) {
  let gender = ssn.replace(/\D/g, '').charAt(6);
  if(gender == 1) {
    return '남자';
  } else {
    return '여자';
  }
}
result = checkGender('9701012234567');
console.log(result); //남자

sso.forEach(el => { //sso 안 배열의 값들을 반복하면서 하나씩 확인하려고 할 때
//=> sso.forEach(fucntion (el)) {~~ 
  let result = checkGender(el);
  console.log(result); 
});

