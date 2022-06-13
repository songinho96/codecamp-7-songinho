import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuth() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      Modal.error({
        title: "Error 메시지",
        content: "로그인 후 이용 가능합니다!",
      });
      router.push("/login");
    }
  });
}
