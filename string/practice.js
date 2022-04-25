//string/practice

    let str = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A molestiae maxime eveniet facilis rerum asperiores quaerat ex iusto eum, ratione temporibus dolorem veniam deleniti fugit accusantium id distinctio eligendi minima.';
    //단어의 길이가 10개 이상인 값을 골라내서
    //consectetur, adipisicing, exrcitationem, ...
    console.log(str.split(' ').filter(el => el.length >= 10).join(',')); 
    //filter(el => el.length >=10) : 배열 
    //split(' ') = 공백을 기준으로 문장을 잘라서 배열형태로 바꾼다
    //filter(el => el.length >= 10) = 배열에 있는 요소(단어)의 길이가 10보다 같거나 큰것만(true) 반환하여 배열형태로 만든다
    //join(',') = 배열형태를 문자열로 바꾼다