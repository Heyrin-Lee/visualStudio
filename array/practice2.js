//array/practice2.js

let data = 
`[{"id":1,"first_name":"Dru","last_name":"Brute","email":"dbrute0@google.co.uk","gender":"Female","ip_address":"27.17.62.112"},
{"id":2,"first_name":"Pennie","last_name":"Le Noury","email":"plenoury1@msn.com","gender":"Female","ip_address":"7.36.178.159"},
{"id":3,"first_name":"Justinn","last_name":"Beesley","email":"jbeesley2@alexa.com","gender":"Female","ip_address":"234.218.28.158"},
{"id":4,"first_name":"Biron","last_name":"Haslam","email":"bhaslam3@unc.edu","gender":"Male","ip_address":"102.226.254.57"},
{"id":5,"first_name":"Shirline","last_name":"Saker","email":"ssaker4@booking.com","gender":"Female","ip_address":"43.134.181.159"},
{"id":6,"first_name":"Elfie","last_name":"Boulde","email":"eboulde5@free.fr","gender":"Female","ip_address":"243.107.209.213"},
{"id":7,"first_name":"Somerset","last_name":"Mumbray","email":"smumbray6@pagesperso-orange.fr","gender":"Male","ip_address":"8.98.141.201"},
{"id":8,"first_name":"Gaby","last_name":"Birdfield","email":"gbirdfield7@seesaa.net","gender":"Female","ip_address":"146.102.46.192"},
{"id":9,"first_name":"Upton","last_name":"Gilders","email":"ugilders8@narod.ru","gender":"Male","ip_address":"34.156.249.67"},
{"id":10,"first_name":"Ajay","last_name":"Di Biaggi","email":"adibiaggi9@booking.com","gender":"Female","ip_address":"216.226.56.97"},
{"id":11,"first_name":"Wally","last_name":"Pund","email":"wpunda@china.com.cn","gender":"Female","ip_address":"97.46.237.11"},
{"id":12,"first_name":"Benny","last_name":"McBay","email":"bmcbayb@uol.com.br","gender":"Female","ip_address":"43.179.51.225"},
{"id":13,"first_name":"Stafford","last_name":"Plomer","email":"splomerc@sfgate.com","gender":"Male","ip_address":"37.154.241.234"},
{"id":14,"first_name":"Hyacinth","last_name":"Glancey","email":"hglanceyd@patch.com","gender":"Female","ip_address":"67.38.239.91"},
{"id":15,"first_name":"Kinsley","last_name":"Huggin","email":"khuggine@amazon.co.uk","gender":"Male","ip_address":"16.84.96.61"}]`;

let objAry = JSON.parse(data); //문자열->Object 변환

console.log(objAry); //배열의 값 뭉텅이를 보여준다

//tag를 누적시킨다
let result = objAry.reduce(function (accum, elem, ind) {
//<ul> ~ </ul> 
  if(ind == 0) {
    accum += '<ul>';
  }
  accum += `<li>id: ${elem['id']}, first_name: ${elem['first_name']} </li>`; //elem이 가지고 있는 id의 필드값을 불러온다
  if(ind === objAry.length - 1) {
    accum += '</ul>';
  }
  return accum; //계속 누적시킨 값을 다음 순번의 초기값으로 사용한다(계속 누적해서 tag 생성)
}, ''); //초기값을 문자열('')로 설정하였다 *맨 처음 초기값을 설정해주지 않으면 처음초기값+다음초기값이 계속 쌓여서 그 다음 초기값이 된다*
console.log(result);
document.write(result);
