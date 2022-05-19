////  1 번

// 문자열을 정수로 바꾸기
// 문제 설명
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

// 제한 조건
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.
// 입출력 예
// 예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
// str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.

function solution(s) {
  // var answer = 0;
  // answer = Number(s);
  // console.log(typeof Number(s))
  // return answer;
  return Number(s)
}

////  2 번

// 같은 숫자는 싫어
// 문제 설명
// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 배열 arr의 크기 : 1,000,000 이하의 자연수
// 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수
// 입출력 예
// arr	answer
// [1,1,3,3,0,1,1]	[1,3,0,1]
// [4,4,4,3,3]	[4,3]
// 입출력 예 설명
// 입출력 예 #1,2
// 문제의 예시와 같습니다.

function solution(arr) {
  const answer = [];
  
  // 1. arr 배열의 각각의 숫자 (원소) 를 가져오기 위한 반복문
  for( let i = 0; i < arr.length; i++ ) {
      // 2. 지금의 숫자와 그 뒤에 있는 숫자가 서로 동일한지를 체크하는 조건문
      if ( arr[i] !== arr[i + 1]) {
          answer.push( arr[i] )
      }       
  }
  
  
  return answer;
  
}


////  3 번

// 핸드폰 번호 가리기
// 문제 설명
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// phone_number는 길이 4 이상, 20이하인 문자열입니다.
// 입출력 예
// phone_number	return
// "01033334444"	"*******4444"
// "027778888"	"*****8888"

function solution(phone_number) {
  let answer = "";
  
//   for( let i = 0; i < phone_number.length; i++ ) { 
//       if ( i < phone_number.length - 4) {
//           // answer = answer + "*"
//           answer += "*"
//       } else {
//           // answer = answer + phone_number[i];
//           answer += phone_number[i]
//       }
      
//   }
  
//   return answer;

// }

function solution(phone_number) {
  let answer = "";
  
  console.log(phone_number.length)
  answer = answer.padStart( phone_number.length - 4, "*"  ) 
  answer += phone_number.substring( phone_number.length -4)
  
  return answer;

}