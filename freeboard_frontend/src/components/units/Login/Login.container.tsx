import { useRouter } from "next/router";
import React from "react";
import LoginPresenter from "./Login.presenter";

export default function LoginContainer() {
  const router = useRouter();

  const onClickMoveSignup = () => {
    router.push("/signup");
  };
  return <LoginPresenter onClickMoveSignup={onClickMoveSignup} />;
}
