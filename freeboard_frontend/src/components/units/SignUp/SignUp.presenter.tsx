import React from "react";
import * as S from "./SignUp.styles";

export default function SignUpPresenter(props) {
  return (
    <S.Wrapper>
      <S.WrapMainTitle>
        <S.MainIcon>MainIcon</S.MainIcon>
        <S.MainTitle>Sign Page</S.MainTitle>
      </S.WrapMainTitle>
      <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <S.WrapperBody>
          <S.WrapperSocialSignup>
            <S.Title>Social SignUp</S.Title>
            <S.Label>Google SignUp</S.Label>
            <S.SocialButton src="/login/google.svg" />
            <S.Label>Facebook SignUp</S.Label>
            <S.SocialButton src="/login/facebook.svg" />
            <S.Label>Twitter SignUp</S.Label>
            <S.SocialButton src="/login/twitter.svg" />
          </S.WrapperSocialSignup>
          <S.WrapperDivideLine>
            <S.DivideLine></S.DivideLine>
            <S.Or>or</S.Or>
            <S.DivideLine></S.DivideLine>
          </S.WrapperDivideLine>
          <S.WrapperEmailSignup>
            <S.Title>Sign up</S.Title>
            <S.Label>Email address</S.Label>
            <S.InputSign
              type="text"
              placeholder="이메일을 입력해 주세요"
              {...props.register("email")}
            />
            <S.Error>{props.formState.errors.email?.message}</S.Error>
            <S.Label>Name</S.Label>
            <S.InputSign
              type="text"
              placeholder="이름을 입력해 주세요"
              {...props.register("name")}
            />
            <S.Error>{props.formState.errors.name?.message}</S.Error>
            <S.Label>Password</S.Label>
            <S.InputSign
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              {...props.register("password")}
            />
            <S.Error>{props.formState.errors.password?.message}</S.Error>
            <S.Label>Password Check</S.Label>
            <S.InputSign
              type="password"
              placeholder="비밀번호를 입력해 주세요"
            />
            <S.SignupButton isActive={props.formState.isValid}>
              회원가입 하기
            </S.SignupButton>
          </S.WrapperEmailSignup>
        </S.WrapperBody>
      </form>
      <S.WrapperFooter>
        <S.FooterLabel>Already have an account?</S.FooterLabel>
        <S.FooterLabelLog onClick={props.onClickMoveLogin}>
          Log in
        </S.FooterLabelLog>
      </S.WrapperFooter>
    </S.Wrapper>
  );
}
