import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/components/store";

// const LOGIN_USER = gql`
//   mutation loginUser($password: String!, $email: String!) {
//     loginUser(password: $password, email: $email) {
//       accessToken
//     }
//   }
// `;

// 토큰 만료시간 5초
const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($password: String!, $email: String!) {
    loginUserExample(password: $password, email: $email) {
      accessToken
    }
  }
`;
export default function LoginPage() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUserExample] = useMutation(LOGIN_USER_EXAMPLE);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    const result = await loginUserExample({
      variables: {
        password,
        email,
      },
    });
    const accessToken = result.data.loginUserExample.accessToken;
    setAccessToken(accessToken);
    alert("로그인에 성공하였습니다.");
    router.push("./30-02-login-success");
  };

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인하기</button>
    </div>
  );
}
