//object/basic.js

//오브젝트 생성방법1
const member = {
  memberId:'user1', //속성과 값을 : 으로 구분하였다
  memberName:'Hong',
  getMemberName:function() {
    return `회원이름은 ${this.memberName}`;
  },
  setMemberName: function(name) {
    this.memberName = name;
  }
}

console.log(member.memberId);
member.setMemberName('Hwang'); //memberName의 값을 변경하였다
console.log(member.getMemberName()); //()의 유무에 따라 문자열을 출력할건지 결과값을 출력할건지 나뉜다
member.memberAge = 20; //속성을 추가할 수도 있다 & "오브젝트이름.추가할 속성 이름" 의 형태로 function문장 밖에서도 추가,삭제 할수도 있다
delete member.memberAge; //속성을 삭제할 수도 있다
member['memberPoint'] = 1000;
member.grade = function() {
  if(this.memberPoint > 500) { //this는 member라는 오브젝트를 가리킨다 & this.뒤에 오는 값은 속성
    return 'gold'
  } else if (this.memberPoint > 1000) {
    return 'platinum'
  }
}
console.log(member.grade); //()가 없으면 문자열을 출력
console.log(member.grade()); //()가 있으면 결고값을 출력

//오브젝트를 만드는 방법에는 클래스,construct함수를 이용할 수 있다 & 오브젝트 생성방법2
class Student {
  constructor(sno, sname) { //constructor = 생성자
    this.sno = sno;
    this.sname = sname;
  }
  set mathScore(score) { //생성자에 선언되지 않은 속성 추가,,추가적으로 속성값을 추가하고 싶을 때 추가할 수 있다(그 속성값을 읽어오고 싶을 때는 get으로 만들어줘야한다)
    this._mathScore = score; //set mathScore를 호출해서 값을 담는 것이 아니라, 값을 담는 속성값은 _mathScore이다(이름을 다르게 해줘야한다) =>자기자신을 계속 호출해서 리소스를 반복해서 사용하게 되어 정상적으로 출력이 되지 않는다
  }
  get mathScore() {
    return this._mathScore; //_mathScore라는 속성값을 읽어오겠다
  }
  getSno() {
    return this.sno;
  }
  setSno(sno) {
    this.sno = sno;
  }
}

const s1 = new Student('1111', 'Hong'); //인스턴스 생성
const s2 = new Student('2222', 'Hwang');
console.log('학생번호: ' + s1.getSno()); //매소드로 호출->s1의 학생번호 출력
s1.engScore = 80;
s1.mathScore = 90;
console.log(s1.engScore); //mathScore라는 setter를 호출한다
console.log(s1.mathScore); //mathScore라는 getter를 호출한다

//오브젝트 생성방법3
function Person(ssn, sname) { //자체가 생성자 호출
  this.ssn = ssn;
  this.sname = sname;
  this.getInfo = function() { //매소드 선언 & 기능은 function
    return `주민번호 ${this.ssn}, 이름 ${this.sname}`;
    }
  }
  const p1 = new Person('96111-111111', 'Hong');
  const p2 = new Person('84111-111111', 'Hwang');
  const p3 = new Person('78111-111111', 'Park');
  console.log(p1.getInfo());
