import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../src/commons/store";
import { useAuth } from "../../../../src/components/commons/hooks/useAuth";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function PaymentLoginPage() {
  const [loginUser] = useMutation(LOGIN_USER);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const onClickSubmit = async (data) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      console.log(result);
      console.log(data);
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      Modal.success({ content: "환영합니다!!!" });
      router.push("/quiz06/payment/loading");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      이메일 :<input type="text" {...register("email")} />
      비밀번호: <input type="password" {...register("password")} />
      <button>로그인하기</button>
    </form>
  );
}
