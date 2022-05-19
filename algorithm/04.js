// 서울에서 김서방 찾기
// 문제 설명
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.
// 입출력 예
// seoul	return
// ["Jane", "Kim"]	"김서방은 1에 있다"

function solution(seoul) {
  // let x = 0;
  
  for( let i = 0; i < seoul.length; i ++){
      if( seoul[i] === "Kim" ) {
          x = i
          // break; "Kim" 을 찾으면 멈춤
          return `김서방은 ${i}에 있다`
      }
  }
 // return
}

function solution(seoul) {

const x = seoul.indexOf("Kim");
return `김서방은 ${x}에 있다`

}





// 문자열 다루기 기본
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// 입출력 예
// s	return
// "a234"	false
// "1234"	true



function solution(s) {
  if( s.length !== 4 && s.length !== 6){
      return false;
  }
  
  for ( let i = 0; i < s.length; i++) {
      if ( isNaN( s[i] )) {
          // 문자열 중 하나라도 숫자가 아닌 경우
          // 이때는 바로 false를 리턴한다.
          return false
          }
  } 
  return true
}

function solution(s) {
  if( s.length !== 4 && s.length !== 6){
      return false;
  }
  
  function solution(s) {
    if( s.length !== 4 && s.length !== 6){
        return false;
    }
    
    const answer = s.split("")
                    .filter( el => {
                        return isNaN( el ) === true
                        console.log(el, isNaN(el))

    // 빈 배열이 아니라면, 전체가 숫자로 구성되어 있지 않다. (false 를 리턴)
    // 빈 배열이 맞다면, 전체가 숫자로 구성되어 있다 (true : false)
                    });
    return answer.length === 0
}



// 약수의 합
// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.
// 입출력 예
// n	return
// 12	28
// 5	6
// 입출력 예 설명
// 입출력 예 #1
// 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

// 입출력 예 #2
// 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.



function solution(n) {
  let answer = 0;
  for( let i = 1; i <= n; i++) {
      if(n % i === 0){
          answer += i
      }
  }
  
  return answer;
}




function solution(n) {
  let answer = n;
  for( let i = 1; i <= n / 2; i++) {
      if(n % i === 0){
          answer += i
      }
  }
  
  return answer;
}




