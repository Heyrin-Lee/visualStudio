//dom/basic.js

//DOM : 생성, 속성 변경, 삭제, 부모-자식 관계 설정
//addEventListner('이벤트이름', '실행할 이벤트 핸들러'<-이벤트가 발생하면 실행할 코드)

document.addEventListener('DOMContentLoaded',function() { //document(= body영역)에 event가 발생하는 것을 듣고있는 매소드를 등록(=event를 등록한다)
  let h3Tag = document.getElementsByTagName('h3'); //HTMLCollection 타입으로 반환
  console.log(h3Tag);
  h3Tag[1].innerHTML = 'Content Changed'; //elements~ 복수이기 때문에 index값을 써줘야한다

  let first = document.getElementById('first'); //element(요소) 하나를 가져온다*elementID만 단수의 형태로 가져온다*
  console.log(first);
  first.innerHTML = 'Git Changed'; //element~ 하나밖에 없기 때문에 index값을 써주지 않아도 된다

  let second = document.getElementsByClassName('first');
  second[0].innerHTML = '사과';

  //CSS의 선택자 h3 > div
  //querySelector를 사용하면 nodelist 타입으로 반환된다
  let list = document.querySelectorAll('ul>li'); //querySelector: 만족하는 첫번째 요소만 가져온다, querySelectorAll: 만족하는 요소 모두 가져온다 
  console.log(list);
  list[1].style.backgroundColor = 'yellow';

  //DOM 생성
  let newList = document.createElement('li'); //<li>Mango</li> Tag 만들기
  newList.innerHTML = 'Mango'; //Mango는 <li>Tag의 하위요소이기 때문에 innerHTML 속성을 사용한다

  console.log(newList);

  //ul 하위요소 <li>Mango</li>
  let ulTag = document.querySelector('ul'); //첫번째 <ul>Tag를 가져온다
  ulTag.appendChild(newList);

}); 
