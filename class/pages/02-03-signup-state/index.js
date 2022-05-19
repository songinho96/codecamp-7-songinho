import { useState } from "react"

export default function SignupStatePage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [emailError, setEmailError] = useState("")

    function onChangeEmail(event){
      // event.target       => 태그 전체를 의미, 예) <input type="text" />
      // event.target.value => 태그에 입력된 값!!!
      setEmail(event.target.value)
    }

    function onChangePassword(event){
      setPassword(event.target.value)
    }

    function onClickSignup(){ //() 안에 event를 쓸 필요가 없으면 굳이 쓸 필요 없다.
      // 진짜 포장이 잘 됐는지 확인해보기
      console.log(email)
      console.log(password)

      if(email.includes("@") === false){
        // alert("이메일이 올바르지 않습니다!! @가 없음!!")
        setEmailError("이메일이 올바르지 않습니다!! @가 없음!!")
      } else {
        alert("회원가입을 축하합니다!!!")
      }
    }

    return (
        <div>
            이메일: <input type="text" onChange={onChangeEmail} /><br />
            <div>{emailError}</div>
            비밀번호: <input type="password" onChange={onChangePassword} /><br />
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )

}

// import React, { useState } from 'react'

// export default function SighupStatePage() {

//   const [email, setEmail] = useState()
//   const [password,setPassword] = useState()

//   const [emailError,setemailError] = useState()

//   const onChangeEmail = (event) => {
//     setEmail(event.target.value)
//   }

//   const onChangePassword = (event) => {
//     setPassword(event.target.value)
//   }

//   const onClickSignup = () => {
//     if (email.includes("@") === false){
//       setemailError("에러")
//     } else {
//       alert("회원가입")
//     }
//   }


//   return (
//     <div>
//       이메일 <input type="text" onChange={onChangeEmail} /><br/>
//       <div>{emailError}</div>
//       비밀번호 <input type="password" onChange={onChangePassword}/><br/>
//       <button onClick={onClickSignup}>회원가입</button>
//     </div>
//   )
// }
