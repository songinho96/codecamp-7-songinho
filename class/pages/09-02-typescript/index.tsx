export default function TypescriptPage() {
  // 타입 추론 
  let aaa = "안녕하세요"
  aaa =3

  // 타입 명시
  let bbb: string = "반갑습니다"

  // 문자 타입
  let ccc: string
  ccc = "반가워요!!!
  ccc = 3

  // 숫자 타입
  let ddd: number = 10
  ddd = "철수"

  // 불린 타입
  let eee: boolean = true
  eee = false
  eee = "false" // js에서는 true로 작동함

  // 배열 타입
  let fff: number[]  = [1, 2, 3, 4, 5, "안녕하세요"]
  // let ggg: string[] = ["철수", "영희", "훈이", 10] 오류
  let ggg = ["철수", "영희", "훈이", 10] // 문자 또는 숫자가 들어 갈 수 있는 배열로 추론
  // 명시하지 않을시, (nimber | string)[] 타입으로 추론됨!

  // 객체 타입
  interface IProfile {
    name: string
    age: number | string
    school: string
  }
  const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교"
  }
  profile.age = "8살" // 오류 타입이 추론될 당시에 number로 추촌됨

  // 함수 타입
  const add = (money1: number, money2: number, unit: string):  string => {
    return money1 + money2 + unit
  }

  const result = add(1000, 2000 , "원")


  return <div>타입스크립트 연습하기!!!</div>

}