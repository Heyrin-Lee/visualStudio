//array/basic2.js

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

//find(); : 조건에 대해 만족하는 최초의 요소 하나만 반환하고 끝낸다
let objAry = [];
objAry = JSON.parse(data);

let result = objAry.find(function (elem) {
  return elem.gender == 'Female';
}); 

console.log(result);