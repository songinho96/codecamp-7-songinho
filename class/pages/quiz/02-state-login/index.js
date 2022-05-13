import * as S from '../../../styles/quiz02Emotion'
import { useState } from 'react'

export default function StateLogin() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  function onChangeEmail(event) {
    setEmail(event.target.value)
  }

  function onChangePassword(event) {
    setPassword(event.target.value)
  }

  function onClickLogin() {

    if (email.includes("@") === false) {
      setEmailError("이메일 주소를 다시 확인해주세요.")
    } else {
      setEmailError("")
    }

    if (password.length <= 8 || password.length >= 16) {
      setPasswordError("8 ~ 16자리 영문, 숫자, 특수 문자만 사용 가능합니다.")
    } else {
      setPasswordError("")
    }

    

  }


  return (
    <S.Wrapper>

      {/* 해더 */}
      <S.Header>
        <S.HeaderWrapper>
          <S.LocationIcon src="/images/logo-white.png" />
          <S.Title>잇츠로드</S.Title>
        </S.HeaderWrapper>
      </S.Header>

      {/* 바디 */}
      <S.Body>
        <S.InputWrapper>
          <S.Log>
            <S.Email type="text" placeholder='simplelife@gmail.com' onChange={onChangeEmail}  />
            <S.XButton src="/images/delete-white.png" />
          </S.Log>
          <S.Underline></S.Underline>
          <S.EmailError>{emailError}</S.EmailError>
          
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Log>
            <S.Password type="password" placeholder='비밀번호 입력' onChange={onChangePassword}   />
            <S.XButton src="/images/delete-white.png" />
          </S.Log>
          <S.Underline></S.Underline>
          <S.PasswordError>{passwordError}</S.PasswordError>
          
        </S.InputWrapper>

        <S.LoginWrapper>
          <S.Login onClick={onClickLogin}>로그인</S.Login>
        </S.LoginWrapper>

        <S.SearchWrapper>
          <S.SearchEmail>이메일 찾기</S.SearchEmail>
          <S.Next>|</S.Next>
          <S.SearchPassword>비밀번호 찾기</S.SearchPassword>
          <S.Next>|</S.Next>
          <S.Sign>회원가입</S.Sign>
        </S.SearchWrapper>
      </S.Body>
      
      {/* 푸터 */}
      <S.Footer>
        <S.Kakao>
          <S.KakaoLogin>
            <S.KakaoImage src="/images/kakao.svg" />
            <S.KakaoInput>카카오톡 로그인</S.KakaoInput>
          </S.KakaoLogin>
        </S.Kakao>
      </S.Footer>

    </S.Wrapper>

  )


}