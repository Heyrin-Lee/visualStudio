//dom/practice4.js

let data = [{
  id: 101,
  name: '홍길동',
  age: 20
}, {
  id: 102,
  name: '김길동',
  age: 22
}, {
  id: 103,
  name: '이길동',
  age: 30
}];

document.addEventListener('DOMContentLoaded', callbackFnc);

function callbackFnc() {

console.log(window);


  let table = document.createElement('table');
  table.setAttribute('border', '1');

  thead = makeHead();
  tbody = makeBody(data);

  table.appendChild(thead);
  table.appendChild(tbody);

  document.getElementById('show').appendChild(table);

  //데이터 추가
  let newobj = { //김민수씨의 데이터 = newobj 를 넣기 위해서 newobj를 선언
    id: 105,
    name: '김민수',
    age: 20
  };
  document.querySelector('table>tbody').appendChild(makeTr(newobj)); //table>today: 테이블 속 tbody를 선택해서 ,그 안에 makeTr()함수의 newobj(=추가입력)값을 종속시킨다

  //추가 버튼 이벤트 
  let btn = document.querySelector('button'); //index.html에서 button태그를 선택해서 가져온다
  btn.addEventListener('click', function () {
    let obj = {} //obj라는 비어있는 오브젝트 선언
    let userName = document.getElementById('userName').value; //index.html에 있는 userName이라는 ID 이름을 value값과 같이 불러온다(=버튼에 입력된 값)
    obj.name = userName; //진짜 값

    let userAge = document.getElementById('userAge').value;
    obj.age = userAge;
    obj.id = 101; //임의로 넣어준 id값

    document.querySelector('table>tbody').appendChild(makeTr(obj)); //변수 이름은 obj
  })


};

//thead함수 이용
function makeHead() {
  let thead = document.createElement('thead'); //let 등 변수지정을 안 하면 전역변수, 지정해주면 로컬변수
  let tr = document.createElement('tr');
  thead.appendChild(tr);

  let th = document.createElement('th');
  let text = document.createTextNode('이름');
  tr.appendChild(th);
  th.appendChild(text);

  th = document.createElement('th');
  text = document.createTextNode('나이');
  tr.appendChild(th);
  th.appendChild(text);

  th = document.createElement('th');
  text = document.createTextNode('기능');
  tr.appendChild(th);
  th.appendChild(text);

  return thead; //makeHead라는 함수를 호출하면 안에서 만든 thead를 반환한다
}

//tbody-tr 함수
function makeTr(obj) {
  fields = ['name', 'age'];

  let tr = document.createElement('tr');
  tr.setAttribute('id', obj.id);

  fields.forEach(function (field) {
    let td = document.createElement('td');
    let text = document.createTextNode(obj[field]);
    tr.appendChild(td);
    td.appendChild(text);
  })
  let btn = document.createElement('button'); //<button>삭제</button>
  btn.innerHTML = '삭제';
  btn.addEventListener('click', function (evnt) {
    //console.log(evnt);
  });
  let td = document.createElement('td');
  tr.appendChild(td);
  td.appendChild(btn);

  return tr;
}

//delete callback 함수
function deleteCallBack() {
  //deleteCallBack()에 evnt(=매개변수)를 쓰면 이렇게 사용 가능 ==> evnt.target.parentElement.parentElement.remove() //parentElement: 첫 번째 부모 태그 td, 두 번째 부모태그 tr <- tr을 remove하겠다 => 태그의 관계를 통해서 지정하고자 하는 태그를 선택하는 방법
  console.log(this); //evnt.target;
  this.parentElement.parentElement.remove(); //evnt.target을 써도 되고 this를 써도 된다 *this를 쓰면 이벤트를 받는 대상이다*
}

//tbody 함수
function makeBody(objAry) { //뭉텅이 objAry
  let tbody = document.createElement('tbody');

  objAry.forEach(function (obj) { //objAry 뭉텅이 값들을 obj 타입으로 하나씩 받아오겠다
    tbody.appendChild(makeTr(obj));
  })
  return tbody;
}