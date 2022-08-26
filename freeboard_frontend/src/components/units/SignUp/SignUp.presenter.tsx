import React from "react";
import * as S from "./SignUp.styles";
import { ISignUpPresenterProps } from "./SignUp.types";

export default function SignUpPresenter(props: ISignUpPresenterProps) {
  return (
    <S.Wrapper>
      <S.WrapSign>
        <S.WrapMainTitle>
          {/* <S.MainIcon>MainIcon</S.MainIcon> */}
          <S.MainTitle>회원가입</S.MainTitle>
        </S.WrapMainTitle>
        <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
          <S.WrapperBody>
            <S.WrapperEmailSignup>
              {/* <S.Title>Sign up</S.Title> */}
              <S.Label>이메일</S.Label>
              <S.InputSign
                type="text"
                placeholder="이메일을 입력해 주세요"
                {...props.register("email")}
              />
              <S.Error>{props.formState.errors.email?.message}</S.Error>
              <S.Label>이름</S.Label>
              <S.InputSign
                type="text"
                placeholder="이름을 입력해 주세요"
                {...props.register("name")}
              />
              <S.Error>{props.formState.errors.name?.message}</S.Error>
              <S.Label>비밀번호</S.Label>
              <S.InputSign
                type="password"
                placeholder="비밀번호를 입력해 주세요"
                {...props.register("password")}
              />
              <S.Error>{props.formState.errors.password?.message}</S.Error>
              <S.Label>비밀번호 확인</S.Label>
              <S.InputSign
                type="password"
                placeholder="비밀번호를 입력해 주세요"
                {...props.register("pwdCheck")}
              />
              <S.Error>
                {props.formState.errors.pwdCheck &&
                  "비밀번호가 일치하지 않습니다"}
              </S.Error>
              <S.SignupButton isActive={props.formState.isValid}>
                회원가입 하기
              </S.SignupButton>
            </S.WrapperEmailSignup>
          </S.WrapperBody>
        </form>
        <S.WrapperFooter>
          <S.FooterLabel>가입된 이메일이 있으신가요?</S.FooterLabel>
          <S.FooterLabelLog onClick={props.onClickMoveLogin}>
            로그인
          </S.FooterLabelLog>
        </S.WrapperFooter>
      </S.WrapSign>
    </S.Wrapper>
  );
}
