//dom/practice2.js

document.addEventListener('DOMContentLoaded', function() {
  
  let div = document.createElement('div');
  let spanName = document.createElement('span'); // <span></span> : element node
  //span1.innerHTML = '홍길동'; //text node
  spanName.setAttribute('id', 'name'); //attribute 노드 추가 ('attribute이름', 'value') *attribute는 자식이 아니다!속성!*
  let name = document.createTextNode('홍길동'); //텍스트 값을 만들기 위한 node 설정하고 name이라는 변수에 할당
  spanName.appendChild(name); //text노드를 span태그에 자식태그로 붙여넣기

  let hypen = document.createTextNode('-');
  // let span2 = document.createElement('span');
  // span2.innerHTML = '-';

  let spanAge = document.createElement('span');
  //span2.innerHTML = '20살';
  spanAge.setAttribute('id', 'age');
  let age = document.createTextNode('20살');
  spanAge.appendChild(age); //<span></span>:부모 - <text>:자식

  div.appendChild(spanName);
  div.appendChild(hypen);
  div.appendChild(spanAge);
  

  document.getElementById('show').appendChild(div);
})
