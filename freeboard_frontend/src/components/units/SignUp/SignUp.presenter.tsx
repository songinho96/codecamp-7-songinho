import React from "react";
import * as S from "./SignUp.styles";

export default function SignUpPresenter(props) {
  return (
    <S.Wrapper>
      <S.WrapMainTitle>
        <S.MainIcon>MainIcon</S.MainIcon>
        <S.MainTitle>Sign Page</S.MainTitle>
      </S.WrapMainTitle>
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
          <div> or </div>
          <S.DivideLine></S.DivideLine>
        </S.WrapperDivideLine>
        <S.WrapperEmailSignup>
          <S.Title>Sign up with your email address</S.Title>
          <S.Label>Email address</S.Label>
          <S.InputSign placeholder="이메일을 입력해 주세요" />
          <S.Label>Name</S.Label>
          <S.InputSign placeholder="이름을 입력해 주세요" />
          <S.Label>Password</S.Label>
          <S.InputSign placeholder="비밀번호를 입력해 주세요" />
          <S.Label>Password Check</S.Label>
          <S.InputSign placeholder="비밀번호를 입력해 주세요" />
          <S.SignupButton>회원가입 하기</S.SignupButton>
        </S.WrapperEmailSignup>
      </S.WrapperBody>
      <S.WrapperFooter>
        <S.FooterLabel>Already have an account?</S.FooterLabel>
        <S.FooterLabelLog onClick={props.onClickMoveLogin}>
          Log in
        </S.FooterLabelLog>
      </S.WrapperFooter>
    </S.Wrapper>
  );
}
