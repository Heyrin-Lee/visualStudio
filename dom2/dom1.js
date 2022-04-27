//dom2/dom1.js
//dom2/main.html 에서 html요소를 읽어왔기 때문에 html속성을 쓰지 않아도 된다

let data = [{studNo: 101, studName:'조수연', engScore:90, korScore:80},
            {studNo: 102, studName:'황진주', engScore:88, korScore:92},
            {studNo: 103, studName:'권가희', engScore:96, korScore:87},
            {studNo: 104, studName:'유해정', engScore:92, korScore:80}
          ];

//초기화
let list = document.getElementById('list'); //list = tbody(from main.html) => tbody에 data의 값들을 넣어주겠다

data.forEach(function (val,idx,ary) { //forEach에는 함수가 매개변수로 올 수 있는데 첫번째,두번째,세번째 값의 의미가 다르다(val,idx,ary)
  list.appendChild(makeTr(val)) //makeTr에 매개값으로 val값을 넣어준다(=data속 (value)값들을 한 줄씩 꺼내서 읽어올거야)
});

//변경 버튼에 이벤트 설정(코드확인용)-id값으로 찾아오기
//let changeBtn = documnet.querySelector('input[type="button"]');
//changeBtn.addEventListener('click',function() {
  // e.preventDefault(); //기본기능 차단
  // console.log('hhhhh');
  // let sno = document.getElementById('sno').value; //id값이 sno = input태그의 value값을 sno라는 변수에 담았다
  // let sname = document.getElementById('sname').value;
  // let eng = document.getElementById('eng').value;
  // let kor = document.getElementById('kor').value;
  // if(!(sno && sname && eng && kor)) {
  //   alert('필수값을 입력하세요');
  //   return;
  // }
  //하나씩 조건문을 만드는 방법
  // if(!sno) {
  //   alert('변경할 아이디를 선택>>');
  //   return;
  // }else if(!sname) {
  //   alert('변경할 이름을 입력>>')
  //   return;
  // }else if(!eng) {
  //   alert('변경할 영어점수 입력>>')
  // }else if(!kor) {
  //   alert('변경할 국어점수 입력>>')
  //   return;
  // }
  // let searchTr = document.getElementById(`sno_${sno}`); //id값은 sno_로 설정했지만(setattribute) 진짜 값은 sno이다
  // searchTr.children[1].innerHTML = sname; //두번째 td에 바꿀 값을 입력
  // searchTr.childNodes[2].innerHTML = eng;
  // searchTr.childNodes[3].innerHTML = kor;
  // console.log();
//});

//변경 버튼에 이벤트 설정
let changeBtn = document.querySelector('input[type="button"]');
changeBtn.addEventListener('click', function(e) {
  //대상을 찾아오도록
  let targetTr = document.querySelectorAll('#list>tr'); //조건에 만족하는 #list>tr 을 다 가져오세요  
  console.log(targetTr);
  let sno = document.getElementById('sno').value;
  let eng = document.getElementById('eng').value;
  let kor = document.getElementById('kor').value;
  targetTr.forEach(function(tr) {
  if (tr.children[0].innerHTML == sno) {
    tr.children[2].innerHTML = eng; //영어점수변경
    tr.children[3].innerHTML = kor;
    }
  });
});

//추가 버튼에 이벤트 설정
let addBtn = document.querySelector('input[type="submit"]');
addBtn.addEventListener('click', function(a) {
  a.preventDefault();
  let studNo1 = document.getElementById('sno').value;
  let studName1 = document.getElementById('sname').value;
  let engScore1 = document.getElementById('eng').value;
  let korScore1 = document.getElementById('kor').value;
  //날아다니는 값만 있는 상태

  addStu = {};
  addStu.studNo = studNo1; //studNo:key값 studNo1:value값
  addStu.studName = studName1;
  addStu.engScore = engScore1;
  addStu.korScore = korScore1; //addStu안에 값들이 채워져서 사람 한명(객체)가 만들어졌다
  //객체 형태로 담긴 상태= {}


  if(!(sno && sname && eng && kor)) {
    alert('내용을 입력하세요>>')
    return;
  }
  list.appendChild(makeTr(addStu));
  

})

function changeCallBack1(e) {
  e.preventDefault(); //기본기능 차단
  console.log('hhhhh');
  let sno = document.getElementById('sno').value; //id값이 sno = input태그의 value값을 sno라는 변수에 담았다
  let sname = document.getElementById('sname').value;
  let eng = document.getElementById('eng').value;
  let kor = document.getElementById('kor').value;
  if(!(sno && sname && eng && kor)) {
    alert('필수값을 입력하세요');
    return;
  }
  //하나씩 조건문을 만드는 방법
  // if(!sno) {
  //   alert('변경할 아이디를 선택>>');
  //   return;
  // }else if(!sname) {
  //   alert('변경할 이름을 입력>>')
  //   return;
  // }else if(!eng) {
  //   alert('변경할 영어점수 입력>>')
  // }else if(!kor) {
  //   alert('변경할 국어점수 입력>>')
  //   return;
  // }


  let searchTr = document.getElementById(`sno_${sno}`); //id값은 sno_로 설정했지만(setattribute) 진짜 값은 sno이다
  searchTr.children[1].innerHTML = sname; //두번째 td에 바꿀 값을 입력
  searchTr.childNodes[2].innerHTML = eng;
  searchTr.childNodes[3].innerHTML = kor;
  console.log();
}


//changeCallBack function 생성.. 그냥 해봄.. 코드 확인용으로 남겨둠..
function changeCallBack1(e) {
  e.preventDefault(); //기본기능 차단
  console.log('hhhhh');
  let sno = document.getElementById('sno').value; //id값이 sno = input태그의 value값을 sno라는 변수에 담았다
  let sname = document.getElementById('sname').value;
  let eng = document.getElementById('eng').value;
  let kor = document.getElementById('kor').value;
  if(!(sno && sname && eng && kor)) {
    alert('필수값을 입력하세요');
    return;
  }
  //하나씩 조건문을 만드는 방법
  // if(!sno) {
  //   alert('변경할 아이디를 선택>>');
  //   return;
  // }else if(!sname) {
  //   alert('변경할 이름을 입력>>')
  //   return;
  // }else if(!eng) {
  //   alert('변경할 영어점수 입력>>')
  // }else if(!kor) {
  //   alert('변경할 국어점수 입력>>')
  //   return;
  // }


  let searchTr = document.getElementById(`sno_${sno}`); //id값은 sno_로 설정했지만(setattribute) 진짜 값은 sno이다
  searchTr.children[1].innerHTML = sname; //두번째 td에 바꿀 값을 입력
  searchTr.childNodes[2].innerHTML = eng;
  searchTr.childNodes[3].innerHTML = kor;
  console.log();
}



//student 정보를 한 건 가져오면 <tr>td>학번</td><td>학생이름</td><td>국어</td><td>영어</td>와 같이 값을 반환한다
function makeTr(student) {
  let tr = document.createElement('tr');
  tr.setAttribute('id', 'sno_' + student.studNo); //tr에 id속성(student.studNo)을 부여
  tr.addEventListener('click', function(e) { //tr을 클릭하면 input칸에 값을 하나씩 넣어주도록 한다
    //e.stopPropagation(); //tr에서 이벤트가 실행된 후 하위요소로 이벤트가 전파되는 것을 막는다
    //console.log(this); //tr의 target은 td & this는 event를 받는 대상
    console.log(this.children[0].innerHTML);
    //this(=tr, 이벤트를 받는 대상)의 자식(=td)의 0,1,2,3번째의 값(innerHTML)을 각 id값('sno','sname','eng','kor')에 해당하는 태그(input)에 넣어주겠다
    document.getElementById('sno').value = this.children[0].innerHTML;
    document.getElementById('sname').value = this.children[1].innerHTML; 
    document.getElementById('eng').value = this.children[2].innerHTML;
    document.getElementById('kor').value = this.children[3].innerHTML;
  }, false); 
  for(let field in student) { //student.studNo -> 학생번호를 가져온다 (=studnet['studNo'])
    let td = document.createElement('td');
    td.innerHTML = student[field]; //학생번호,학생이름,영어,국어점수(=field)의 값들을 innerHTML로 넣어준다
    tr.appendChild(td);

  }
  //버튼 : 삭제
  let td = document.createElement('td');
  let btn = document.createElement('button');
  btn.innerHTML = '삭제';
  //삭제 버튼에 click 이벤트 설정
  btn.addEventListener('click', function(e) {
    e.stopPropagation(); //이벤트가 전파되는 것을 차단: button은 td안에 속해있으니까 tr안에도 속해있어서 삭제 버튼을 클릭했을 때 button뿐만 아니라 tr에도 이벤트의 영향이 있다->tr에는 영향을 주지 않도록 하기 위한 기능
    console.log(this); //button의 target은 button,button(button이 제일 하위 요소이니까 target이 button이 되다 & tr과 button에 이벤트가 걸려있으니까 button의 target이 button,button 2개가 나오게 된다)
    //event에 해당하는 target을 찾기 위해서 상위 영역->하위 영역으로 들어간다 = 이벤트 캡쳐링
    e.target.parentElement.parentElement.remove(); //클릭하면 tr 삭제
  }, false); //true:이벤트요소를 찾아오는데 상위요소->하위요소로 가면서 찾겠다는 옵션이다(default값은 false이다: false는 하위->상위요소로 가면서 이벤트를 전파한다*상위요소로의 이벤트 전파를 하지않겠다*)
  tr.appendChild(td);
  td.appendChild(btn);


  return tr;
}
