import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import SignUpPresenter from "./SignUp.presenter";
import { CREATE_USER } from "./SignUp.queries";

export default function SignUpContainer() {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [nameError, setNameError] = useState("");

  const [createUser] = useMutation(CREATE_USER);

  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
    if (!inputs.name) {
      setNameError("");
    }
  };

  const onClickSubmit = async () => {
    if (!inputs.name) {
      setNameError("이름 입력해 시발려나");
    }
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            ...inputs,
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
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
      nameError={nameError}
    />
  );
}
