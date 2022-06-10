import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../store";
import LoginPresenter from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";

export default function LoginContainer() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
  });

  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          ...inputs,
        },
      });
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      // console.log(result);
      // console.log({ inputs });
      Modal.success({ title: "로그인 성공!", content: "환영합니다!" });
      router.push("/boards");
    } catch (error) {
      Modal.error({
        title: "Error 메시지",
        content: "로그인에 실패하였습니다!",
      });
    }
  };

  const onClickMoveSignup = () => {
    router.push("/signup");
  };
  return (
    <LoginPresenter
      onClickMoveSignup={onClickMoveSignup}
      onChangeInputs={onChangeInputs}
      onClickLogin={onClickLogin}
    />
  );
}
