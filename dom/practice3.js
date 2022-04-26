//dom/practice3.js

document.addEventListener('DOMContentLoaded', callbackFnc);

function callbackFnc() {

  let table = document.createElement('table');
  table.setAttribute('border', '1');

  thead = makeHead();
  tbody = makeBody();

  table.appendChild(thead);
  table.appendChild(tbody);

  document.getElementById('show').appendChild(table);
};

//thead함수 이용
function makeHead() {
  let thead = document.createElement('thead'); //let 등 변수지정을 안 하면 전역변수, 지정해주면 로컬변수
  let tr = document.createElement('tr');
  let th1 = document.createElement('th');
  let tName = document.createTextNode('이름');
  let th2 = document.createElement('th');
  let tAge = document.createTextNode('나이');

  //table.appendChild(thead); 
  thead.appendChild(tr);
  tr.appendChild(th1);
  th1.appendChild(tName);
  tr.appendChild(th2);
  th2.appendChild(tAge);

  return thead; //makeHead라는 함수를 호출하면 안에서 만든 thead를 반환한다
}

//tbody 함수이용
function makeBody() {
  let tbody = document.createElement('tbody');
  let tr3 = document.createElement('tr');
  tr3.setAttribute('id', '101');
  let tdName1 = document.createElement('td');
  tdName1.setAttribute('style', 'background:green');
  let Name = document.createTextNode('홍길동');
  let tdAge1 = document.createElement('td');
  let Age = document.createTextNode('20살');
  let tr4 = document.createElement('tr');
  tr4.setAttribute('id', '102');
  let tdName2 = document.createElement('td');
  tdName2.setAttribute('style', 'color:blue');
  let Name2 = document.createTextNode('김길동');
  let tdAge2 = document.createElement('td');
  let Age2 = document.createTextNode('22살');
  let tr5 = document.createElement('tr');
  tr5.setAttribute('id', '103');
  let tdName3 = document.createElement('td');
  let Name3 = document.createTextNode('이길동');
  let tdAge3 = document.createElement('td');
  let Age3 = document.createTextNode('30살');

  //tbody appandchild
  tbody.appendChild(tr3);
  tr3.appendChild(tdName1);
  tdName1.appendChild(Name);
  tr3.appendChild(tdAge1);
  tdAge1.appendChild(Age);
  tbody.appendChild(tr4);
  tr4.appendChild(tdName2);
  tdName2.appendChild(Name2);
  tr4.appendChild(tdAge2);
  tdAge2.appendChild(Age2);
  tbody.appendChild(tr5);
  tr5.appendChild(tdName3);
  tdName3.appendChild(Name3);
  tr5.appendChild(tdAge3);
  tdAge3.appendChild(Age3);

  return tbody;
}