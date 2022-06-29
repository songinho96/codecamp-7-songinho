import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { GraphQLClient } from "graphql-request";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState, isLoadedState, restoreAccessTokenLoadable } from "../../../commons/store";

export default function ApolloSetting(props) {
  // Login
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isLoaded, setIsLoaded] = useRecoilState(isLoadedState);
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable)

  // const accessToken = localStorage.getItem("accessToken");

  // 1. 프리렌더링 예제 - process.browser 방법
  // if (process.browser) {
  //   console.log("지금은 브라우저다!!!!!!");
  //   localStorage.getItem("accessToken");
  // } else {
  //   console.log("지금은 프론트엔드 서버다!!!(yarn dev 프로그램이다!!!!)");
  //   // localStorage.getItem("accessToken");
  // }

  // 2. 프리렌더링 예제 - typeof window 방법
  // if (typeof window !== "undefined") {
  //   // 브라우저가 라면과 같음
  //   console.log("지금은 브라우저다!!!!!!");
  //   localStorage.getItem("accessToken");
  // } else {
  //   console.log("지금은 프론트엔드 서버다!!!(yarn dev 프로그램이다!!!!)");
  //   // localStorage.getItem("accessToken");
  // }

  // 3. 프리렌더링 예제 - useEffect 방법
  useEffect(() => {
    // 무조건 브라우저에서 실행
    // 1. 기존방식
    // console.log("지금은 브라우저다!!!!!!");
    // const accessToken = localStorage.getItem("accessToken");
    // setAccessToken(accessToken || "");
    // // 2. 새로운방식
    // getAccessToken().then((newAccessToken) => {
    //   setAccessToken(newAccessToken);
    // });
    //
    //
    // [ 해결방법: 1번째 -  restoreAccessToken을 두 번 요청하기!! ]
    //  getAccessToken().then((newAccessToken) => {
    //   setAccessToken(newAccessToken);
    // });
    //
    //
    //
    // [ 해결방법: 2번째 -  로딩 활용하기 ]
    // store . isLoadedState 만들기
    // getAccessToken().then((newAccessToken) => {
    //   setAccessToken(newAccessToken);
    //   setIsLoaded(true);
    // });
    //
    //
    // [ 해결방법: 3번째 -  recoil selecter 활용하기]
    aaa.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken)
   
    },[] )
  

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2-1. refreshToken으로 accessToken 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 2-2. 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            operation.setContext({
              headers: {
                ...operation.getContext().headers, // 기존 해더는 유지한 채로
                Authorization: `Bearer ${newAccessToken}`, // accessToken 만 새로운 토큰으로 바꾸기
              },
            });

            // 3-2. 변경된 operation 재요청하기!!!
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend07.codebootcamp.co.kr/graphql", // 백엔드 주소
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]), // 명확한 타입이 없어 이렇게 작성하라고 DOCS에 나와있다.
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
