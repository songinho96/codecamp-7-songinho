// 짝수와 홀수
// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.
// 입출력 예
// num	return
// 3	"Odd"
// 4	"Even"

function solution(num) {
  let answer = 0;
  if( num % 2 === 0 ){
      answer = "Even"
      return answer 
  } else {
      answer = "Odd"
      return answer
  }
}

//    reference code

function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd"; // 삼항연산자 풀이 ( 한번만 쓰는 것이 좋음 )
  // if( num % 2 === 0 ){
  //     return "Even"
  // } else {
  //     return "Odd"  
  // }
}




// 평균 구하기
// 문제 설명
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
// 입출력 예
// arr	return
// [1,2,3,4]	2.5
// [5,5]	5

function solution(arr) {
  let answer = 0
  for ( let i = 0; i < arr.length; i++){
      answer += arr[i]
  }
  answer = answer / arr.length
  return answer
}

//    reference code

function solution(arr) {
  let sum = 0
  for ( let i = 0; i < arr.length; i++){
      sum += arr[i]
  }
  return sum / arr.length
}







// 가운데 글자 가져오기
// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"

function solution(s) {
  let answer = '';
  if ( s.length % 2  === 0 ) {
      answer = s[s.length/2-1]+s[s.length/2]
  } else {
      let i = Math.floor(s.length/2)
      answer = s[i]
  }
  return answer
}


//        reference code

function solution(s) {
  const center = Math.floor(s.length / 2)
  let answer = s[ center ]
  
  if( s.length % 2 === 0 ) {
      answer = s[ center - 1 ] + answer
  }
  return answer;
}



function solution(s) {
  const center = Math.floor(s.length / 2)
  return s.length % 2 === 1
   //홀수인 경우
  ? s[ center ]
   //짝수인 경우
  : s.substring( center - 1, center + 1 )
}