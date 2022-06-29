import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import {
  accessTokenState,
  isLoadedState,
  restoreAccessTokenLoadable,
} from "../../../commons/store";

// export  function withAuth(){
//   return function () {
//   }
// }

// 함수와 return 사이에 아무것도 없으면 생략가능하다
export const withAuth = (Component) => (props) => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isLoaded, setIsLoaded] = useRecoilState(isLoadedState);
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);
  const router = useRouter();

  useEffect(() => {
    // if (!localStorage.getItem("accessToken")) {
    //   alert("로그인 후 이용 가능합니다!!!");
    //   router.push("./23-04-login-check");
    // }
    // 권한분기가 있는 페이지에서 새로고침때 문제가 됨
    // [ 해결방법: 1번째 - restoreAccessToken을 두 번 요청하기!! ]
    // if (!accessToken) {
    //   getAccessToken().then((newAccessToken) => {
    //     if (newAccessToken) {
    //       setAccessToken(newAccessToken);
    //     } else {
    //       alert("로그인 후 이용 가능합니다!!!");
    //       router.push("./23-04-login-check");
    //     }
    //   });
    // }
    // if (!accessToken) {
    //   alert("로그인 후 이용 가능합니다!!!");
    //   router.push("./23-04-login-check");
    // }
  }, []);

  // [ 해결방법: 2번째 - 로딩 활용하기 ]
  // useEffect(() => {
  //   if (isLoaded && !accessToken) {
  //     alert("로그인 후 이용 가능합니다!!!");
  //     router.push("./23-04-login-check");
  //   }
  // }, [isLoaded]);

  // [ 해결방법: 3번째 -  recoil selecter 활용하기]
  useEffect(() => {
    aaa.toPromise().then((newAccessToken) => {
      if (!newAccessToken) {
        alert("로그인 후 이용 가능합니다!!!");
        router.push("./23-04-login-check");
      }
    });
  }, []);

  return <Component {...props} />;
};
