import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: "",
    Password: "",
  });
  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        ...inputs,
      },
    });
    const accessToken = result.data.loginUser.accessToken;
    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);
    alert("환영합니다");
    router.push("./main");
  };
  return (
    <div>
      아이디: <input type="text" id="email" onChange={onChangeInputs} />
      비밀번호:{" "}
      <input type="password" id="password" onChange={onChangeInputs} />
      로그인<button onClick={onClickLogin}>로그인하기</button>
    </div>
  );
}
