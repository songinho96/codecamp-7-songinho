import { CheckCircleOutlined } from "@ant-design/icons";
import React from "react";
import * as S from "./Login.styles";
export default function LoginPresenter(props) {
  return (
    <S.Wrapper>
      <S.WrapMainTitle>
        <S.MainIcon>MainIcon</S.MainIcon>
        <S.MainTitle>Login Page</S.MainTitle>
      </S.WrapMainTitle>

      <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <S.WrapperBody>
          <S.WrapperEmailLogin>
            <S.Title>Email Login</S.Title>
            <S.Label>Email address</S.Label>
            <S.InputEmail
              type="text"
              {...props.register("email")}
              placeholder="이메일을 입력해 주세요"
            />
            <S.Error>{props.formState.errors.email?.message}</S.Error>
            <S.Label>Password</S.Label>
            <S.InputPassword
              {...props.register("password")}
              type="password"
              placeholder="비밀번호를 입력해 주세요"
            />
            <S.Error>{props.formState.errors.password?.message}</S.Error>
            <S.WrapLoginCheck>
              <S.CheckButton>
                <CheckCircleOutlined />
              </S.CheckButton>
              <S.LoginCheck>로그인 상태 유지</S.LoginCheck>
            </S.WrapLoginCheck>
            <S.LoginButton isActive={props.formState.isValid}>
              로그인하기
            </S.LoginButton>
          </S.WrapperEmailLogin>
          <S.WrapperDivideLine>
            <S.DivideLine></S.DivideLine>
            <S.Or>or</S.Or>
            <S.DivideLine></S.DivideLine>
          </S.WrapperDivideLine>
          <S.WrapperSocialLogin>
            <S.Title>Social Login</S.Title>
            <S.Label>Google Login</S.Label>
            <S.SocialButton src="/login/google.svg" />
            <S.Label>Facebook Login</S.Label>
            <S.SocialButton src="/login/facebook.svg" />
            <S.Label>Twitter Login</S.Label>
            <S.SocialButton src="/login/twitter.svg" />
          </S.WrapperSocialLogin>
        </S.WrapperBody>
      </form>

      <S.UnderLine></S.UnderLine>
      <S.WrapperFooter>
        <S.FooterLabel>아이디 찾기</S.FooterLabel>
        <S.FooterLabel>|</S.FooterLabel>
        <S.FooterLabel>비밀번호 찾기</S.FooterLabel>
        <S.FooterLabel>|</S.FooterLabel>
        <S.FooterLabel onClick={props.onClickMoveSignup}>
          회원가입
        </S.FooterLabel>
      </S.WrapperFooter>
    </S.Wrapper>
  );
}
