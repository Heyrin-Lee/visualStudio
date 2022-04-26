//dom/practice1.js
document.addEventListener('DOMContentLoaded', function(){ 
  
  //DOM만 이용
  // let ul = document.createElement('ul'); //<ul></ul> 생성
  //   let li1 = document.createElement('li'); //3개의 li></li>만들어서 속성값 입력
  //   li1.innerHTML = '아이스아메리카노';
  //   let li2 = document.createElement('li');
  //   li2.innerHTML = '카페라떼';
  //   let li3 = document.createElement('li');
  //   li3.innerHTML = '레몬에이드';
  
    // ul.appendChild(li1); //부모태그<ul> - 자식태그<li>
    // ul.appendChild(li2);
    // ul.appendChild(li3);
  
  //DOM+배열 이용
  let menu = ['아이스아메리카노', '카페라떼', '레몬에이드'];
  
  let ul = document.createElement('ul'); //<ul></ul>생성
  for(let i=0; i<menu.length; i++) { //for반복문 시작
    let li = document.createElement('li'); //반복문 안에서 <li></li>생성
    li.innerHTML = menu[i]; //반복문 안에서 <li></li> 속성값 입력(배열 속 i의 갯수만큼 차례대로)

    ul.appendChild(li); //부모태그<ul> - 자식태그<li>
  }

    //for of 
  let ul1 = document.createElement('ul');
  for(let m of menu) { //for of 반복문 시작: menu라는 배열의 값만큼 반복하는데 그 값들을 m에 담는다
    let li = document.createElement('li'); //menu 배열 속 값만큼 <li></li> 생성
    li.innerHTML = m; //

    ul.appendChild(li);
  }

  //forEach
  let ul2 = document.createElement('ul');
  menu.forEach(function (me) {
    let li = document.createElement('li');
    li.innerHTML = me;
    ul.appendChild(li);
  });

  document.getElementById('show').appendChild(ul); //<div id="show"> 가 index.html에 이미 있으니까 바로 show라는 아이디 밑에 ul 태그를 넣어서 불러온다
});