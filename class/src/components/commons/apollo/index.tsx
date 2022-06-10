import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

export default function ApolloSetting(props) {
  // Login
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

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
    console.log("지금은 브라우저다!!!!!!");
    const accessToken = localStorage.getItem("accessToken");
    setAccessToken(accessToken || "");
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend07.codebootcamp.co.kr/graphql", // 백엔드 주소
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]), // 명확한 타입이 없어 이렇게 작성하라고 DOCS에 나와있다.
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
