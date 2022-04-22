//object/practice2.js
//달력만들기

let year = 2022;
let month = 4;


let firstDay = getFirstDay(year, month); //1일의 위치지정하기 위한 함수
let lastDate = getLastDate(year, month); //해당월의 마지막날을 계산 함수

document.write(`<table border=1><tr><th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th></tr><tr>`);
//빈 공간 만들어주기
for (let i = 0; i < firstDay; i++) {
  document.write(`<td> </td>`);
}
//날짜 화면에 출력
for (let i = 1; i <= lastDate; i++) {
  if ((i + firstDay) % 7 == 1) {
    document.write(`<td style="color:red;">${i}</td>`); //일
  } else if ((i + firstDay) % 7 == 0) { 
    document.write(`<td style="color:blue;">${i}</td>`); //토
    document.write(`</tr><tr>`); //줄바꿈
  } else {
    document.write(`<td>${i}</td>`); //나머지 날짜
  }
}
document.write(`</tr></table>`);

function getLastDate(year, month) {
  //말일 정보를 가지고 오는 함수
  switch (month) {
    case 2:
      return 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 1:
    case 3:
    case 7:
    case 8:
    case 10:
    case 5:
    case 12:
      return 31;
  }
}

function getFirstDay(year, month) {
  switch (month) {
    case 1:
      return 6;
    case 2:
      return 2;
    case 3:
      return 2;
    case 4:
      return 5;
    case 5:
      return 0;
    case 6:
      return 3;
    case 7:
      return 5;
    case 8:
      return 1;
    case 9:
      return 4;
    case 10:
      return 6;
    case 11:
      return 2;
    case 12:
      return 4;
  }
}