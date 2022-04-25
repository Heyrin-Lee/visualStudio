//string/basic2.js

//indexOf(), lastIndexOf() : 찾을 문자열의 위치인덱스를 반환. 없으면 -1을 반환
let result = '안녕하세요 홍길동입니다, 대구의 홍길동입니다'.indexOf('홍길동'); //'홍'이라는 인덱스의 위치를 반환해준다/ 앞에 나온는 홍길동
result = '안녕하세요 홍길동입니다, 대구의 홍길동입니다'.lastIndexOf('홍길동'); //뒤에 나오는 홍길동의 인덱스 위치를 반환
result = '안녕하세요 홍길동입니다, 서울의 홍길동, 대구의 홍길동입니다'.indexOf('홍길동', 15); //같은 단어가 여러개 있으면 찾고자 하는 위치를 지정할 수 있다. index 15번부터 나오는 홍길동의 인덱스 위치를 반환

let str1 = '안녕하세요 홍길동입니다, 서울의 홍길동, 부산의 홍길동, 대구의 홍길동입니다'; 
let position = str1.indexOf('부산'); //부산이라는 단어가 있는 인덱스 위치를 찾고자한다. 그걸 담은 변수를 position이라고 설정
result = str1.indexOf('홍길동', position); //부산이라는 단어가 있는 위치부터 홍길동 단어를 찾아 인덱스 위치를 반환 //27

//charAt(인덱스) : index를 넣어주면 해당되는 위치의 문자를 반환
let str2 = str1.charAt(result); //result의 값이 있는 위치(index)의 문자를 반환하도록 한다

//toLowerCase(), toUppercase() : 대문자,소문자 변경
let str3 = 'Lorem ipsum DOLOR sit amet consectetur dolor';
console.log(str3.toLowerCase());

//includes('찾을 문자열') : true/false로 반환
console.log(str3.includes('hey'));

//search('찾을 문자열') & 추가기능: search(정규표현식); = 찾을 문자열의 index를 반환한다
//정규표현식 오브젝트 : / / = (new RegExp()) , 배열: [] = (new Array(1,2)), 
result = str3.search('dolor');
result = str3.search(/dolor/i); //i = 대소문자의 구분없이 해당 문자의 인덱스위치를 반환
console.log(result); 

//match('찾을 문자열') : 문자열을 반환, 찾을 문자열이 없으면 null을 반환
let str4 = 'bad MORNING, GOOD AFTERNOON, good evening, and good night';
result = str4.match('good');
result = str4.match(/good\s\w+/ig); //g:순서 상관없이 나오는 수만큼 해당 문자 다 반환, 반환할 값이 없으면 null을 반환, s: 공백, w: 문자하나(w만 사용: 찾는 문자열 뒤에 오는 문자하나까지만 반환/ w+ 사용: 찾는 문자열 뒤에 오는 문자하나이상(단어까지) 반환 *그냥 s를 넣으면 s도 포함된 문자를 찾기 때문에 공백이라는 의미로 구분하기 위해서 \와 함께 사용한다*
console.log(result);

//replace('찾을 문자열', '바꿀 문자열'); : 첫번째 나오는 찾을 문자열만 바뀐다
result = str4.replace('good','better');
result = str4.replace(/good/ig,'better'); //순서와 대소문자 상관없이 해당 문자를 다 찾아서 better로 변경
result = str4.replace(/\s/ig,'-'); //공백을 찾아와서 -로 변경
result = str4.replace(/\W/ig, '-');  //W: 문자 이외의 것(=숫자만)
result = 'morning1 morning12 morning 123'.replace(/\d/g, ''); //d: 숫자 & D: 숫자 이외의 것(=문자만).. 문장 전체에서 숫자(d)를 찾아서 공백으로 변경
result = 'morning1 morning12 morning 123'.replace(/\D/g, ''); 

let sso = ['970101-1234567', '910101 1234567', '9701011234567', '970101/1234567'];
sso.forEach(num => console.log(num.replace(/\D/g, '')));

console.log(result);

//문자열 합치기: +, concat()
console.log('hello' + 'world');
console.log('hello'.concat('world','~~'));







