import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../store";
import LoginPresenter from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해 주세요.")
    .required("비밀번호는 필수 입력 사항입니다."),
});

export default function LoginContainer() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = async (data) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      console.log(result);
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      Modal.success({
        title: "로그인 성공!",
        content: "환영합니다!",
      });
      router.push("/boards");
    } catch (error: any) {
      Modal.error({
        title: "Error 메시지",
        content: error.message,
      });
    }
  };

  const onClickMoveSignup = () => {
    router.push("/signup");
  };

  return (
    <LoginPresenter
      onClickMoveSignup={onClickMoveSignup}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
    />
  );
}
