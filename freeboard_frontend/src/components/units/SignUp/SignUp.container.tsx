import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import React from "react";
import SignUpPresenter from "./SignUp.presenter";
import { CREATE_USER } from "./SignUp.queries";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해 주세요.")
    .required("비밀번호는 필수 입력 사항입니다."),
  name: yup.string().required("이름은 필수 입력 사항입니다."),
});

export default function SignUpContainer() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = async (data: any) => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
      Modal.success({
        title: "회원 가입 성공!",
        content: `${result.data.createUser.name}님 환영합니다!!!`,
      });
      router.push("/login");
    } catch (error) {
      Modal.error({
        title: "Error 메시지",
        content: "회원가입에 실패하였습니다!",
      });
    }
  };

  const onClickMoveLogin = () => {
    router.push("/login");
  };
  return (
    <SignUpPresenter
      onClickMoveLogin={onClickMoveLogin}
      onClickSubmit={onClickSubmit}
      handleSubmit={handleSubmit}
      formState={formState}
      register={register}
    />
  );
}
