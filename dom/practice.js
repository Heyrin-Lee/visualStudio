//dom/practice.js

document.addEventListener('DOMContentLoaded', function() { //페이지가 다 로딩된 다음에 function이 수행되도록 한다
  let btn = document.querySelector('button'); //button이라는 TAG를 찾아오겠다
  btn.addEventListener('click', function() { //버튼에 이벤트(click)가 발생할 때 실행될 메소드(function())를 설정한다
    //입력값1, 입력값2
  let name = document.getElementById('userName').value; //userName이라는 ID의 value값을 읽어온 것을 name이라는 변수에 담는다
  let age = document.getElementById('userAge').value; //userAge이라는 ID의 value값을 읽어온다

    if(!name) {
      alert('이름을 입력하세요');
      return;
    }
    
    if (!age) {
      alert('나이를 입력하세요');
      return;
    }

  let span1 = document.createElement('span'); //<span></span> 생성
  span1.innerHTML = name; //<span></spna>사이에 name이라는 값을 입력한다 => <span> ${name} </span> (innerHTML은 속성입력)
  let span2 = document.createElement('span');
  span2.innerHTML = age;
  let div1 = document.createElement('div'); //<div></div>생성 *element를 만드는 것을 Tag를 만드는 것이라고 생각하자*
  div1.appendChild(span1); //<div><span></span></div> 부모-자식 태그 생성
  div1.appendChild(span2); //<div><span>홍길동</span><span>20</span></div>

  document.getElementById('show').appendChild(div1); //show라는 <div>에 자식요소 <div1>을 붙여준다 => 화면출력
  }); 

  

});
