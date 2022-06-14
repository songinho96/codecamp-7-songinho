import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

// export  function withAuth(){
//   return function () {
//   }
// }

// 함수와 return 사이에 아무것도 없으면 생략가능하다

// prettier-ignore
export const withAuth = (Component: ComponentType) => <P extends {}>(props: P) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다!!!");
      router.push("./23-04-login-check");
    }
  }, []);

  return <Component {...props} />;
};
