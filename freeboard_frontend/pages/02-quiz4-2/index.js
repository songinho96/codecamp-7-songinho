import { useState } from "react";
import styled from "@emotion/styled";




export default function signPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setpassword2] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  function onChangeEmail(event) {
    setEmail(event.target.value)
  }

  function onChangePassword(event) {
    setPassword(event.target.value)
  }

  function onChangePassword2(event) {
    setpassword2(event.target.value)
  }

  function onClickSignup(){
    if(email.includes("@") === false){
      setEmailError("이메일이 올바르지 않습니다.")
    }
    if(password !== password2) {
      setPasswordError("비밀번호가 다릅니다.")
    }

  }





  return (
    <div>
      <input type="text" placeholder="이메일 입력창" onChange={onChangeEmail} />
      <Error>{emailError}</Error>
      <input type="password" placeholder="비밀번호 입력창" onChange={onChangePassword} />
      <input type="password" placeholder="비밀번호확인 입력창"  onChange={onChangePassword2} />
      <Error>{passwordError}</Error>
      <button  onClick={onClickSignup}>가입하기</button>
    </div>
  )

}


const Error = styled.div`
  color: red;
`;