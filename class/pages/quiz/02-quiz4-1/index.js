import styled from "@emotion/styled";


export default function signPage() {

  function submit() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const password2 = document.getElementById("password2").value

    if(email.includes("@") === false){ 
      document.getElementById("emailError").innerText = "이메일이 올바르지 않습니다."
    } 
    if(password !== password2) {
      document.getElementById("passwordError").innerText ="비밀번호가 다릅니다."
    }
  }

  return (
    <div>
      <input id="email" type="text" placeholder="이메일 입력창"/>
      <Error id="emailError"></Error>
      <input id="password" type="password" placeholder="비밀번호 입력창" />
      <input id="password2" type="password" placeholder="비밀번호확인 입력창" />
      <Error id="passwordError"></Error>
      <button id="submit" onClick={submit}>가입하기</button>
    </div>
  )

}

const Error = styled.div`
  color: red;
`;