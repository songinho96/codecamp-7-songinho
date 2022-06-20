import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState } from "../../../commons/store";

export function useAuth() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // const router = useRouter();

  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);
}

// 기존

// export function useAuth() {
//   const router = useRouter();

//   useEffect(() => {
//     if (!localStorage.getItem("accessToken")) {
//       alert("로그인 후 이용 가능합니다!!!");
//       router.push("./23-04-login-check");
//     }
//   }, []);
// }
