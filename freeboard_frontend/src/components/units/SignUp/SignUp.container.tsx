import { useRouter } from "next/router";
import React from "react";
import SignUpPresenter from "./SignUp.presenter";

export default function SignUpContainer() {
  const router = useRouter();

  const onClickMoveLogin = () => {
    router.push("/login");
  };
  return <SignUpPresenter onClickMoveLogin={onClickMoveLogin} />;
}
