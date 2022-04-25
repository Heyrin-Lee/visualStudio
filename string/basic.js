//string/basic.js
//문자열 vs 문자열 객체

let str1 = '문자열'; //스트링 타입
console.log(typeof str1);

let str2 = new String('문자열'); //new라는 키워드로 생성되는 것 = 오브젝트
console.log(typeof str2);

console.log(str1 == str2); //비교연산자 == : 값만 비교(자바에서는 같다라는 의미) =>true
console.log(str1 === str2); //비교연산자 === : 값과 타입을 같이 비교한다 --> str1:스트링 str2:오브젝트 =>값은 같지만 타입이 다르니까 false

let result = str1.substring(0, 2); // index:0~ index:2까지 잘라내서 가져오겠다.. 첫번째부터 두번째까지의 스트링타입의 값을 읽어온다
console.log(result); //문자
result = str2.substr(0, 2); //index:0 부터 크기 2만큼 잘라내서 가져오겠다
console.log(result); //문자

const cal1 = '1 + 2 * 3'; //string
const cal2 = new String('1 + 2 * 3'); //object

//eval() : 문자열을 수식으로 변경시켜서 처리해주는 함수
console.log(eval(cal1)); //1+2*3 = 7 .. eval()함수를 사용해서 문자열을 수식으로 변경하였다
console.log(eval(cal2.valueOf())); //eval() 함수를 사용해도 object는 그대로 / valueOf()함수: object타입을 문자열 타입으로 반환하는 매소드 ==> 1+2*3=7

//trim() : 좌우의 여백을 잘라내는 매소드
console.log(' 문자열 공백 테스트 '.trim());
console.log(' 문자열 공백 테스트 '.trimStart().trimEnd()); //trimStart() : 왼쪽의 공백만 잘라내는 매소드 / trimEnd() : 오른쪽 공백을 잘라내는 매소드

//문자열의 공백을 제거하는 매소드
result = ' 문자열 공백 테스트 '.split(' '); //매개값을 기준(이 예제에서는 공백)으로 문장을 잘라서 배열형태로 반환
result = result.filter(function(val){ //filter(function(val, ind, ary){}) : 배열의 각 요소의 true값만 반환하여 배열
  return val; //['' '문자열' , '공백', '테스트', ''] 였는데 filter() 매소드를 통해서 '문자열' , '공백', '테스트' 만 출력된다
}); 
console.log(result.join('')); //join() :  배열을 문자열로 반환하는 매소드

result = ' 문자열 공백 테스트 '.split(' ').filter(val => val).join(',');
console.log(result);


//자바스크립트 boolean 값: null, '', 0, undefined => false와 같다
if (!null) { //null = false / null 자체가 false를 의미하기 if문안에 조건식이 오지 않아도 된다
  console.log('false값.') 
}

//slice,substring,substr(Deprecated);
console.log('안녕하세요 반갑습니다.'.slice(0, -4)); //slice(index1, index2); : index1을 기준으로 ~ index2까지 잘라서 출력(0은 포함, 5는 포함No) ==>안녕하세요
console.log('안녕하세요 반갑습니다.'.substring(0, 6)); //음수값이 들어오면 0으로 바꿔버린다
console.log('안녕하세요 반갑습니다.'.substr(2, 6)); // substr(index1, index2) : index1을 기준으로 index2의 크기만큼 가져온다(2번째자리에서 3의 크기만큼 가져온다)

//toString() : 문자열로 변환하는 매소드
let num1 = 123;
console.log(typeof num1); //number
num1 = num1.toString();
console.log(typeof num1); //string

true.toString(); //'true' 라는 결과 반환

let obj = {
  key: 'Hong',
  value: 15
}
console.log(obj.toString()); //object타입은 문자열로 변환 불가능
console.log(obj.key.toString()); //string 타입의 Hong 값이 반환
console.log(obj.value.toString()); //string 타입의 15 값이 반환


