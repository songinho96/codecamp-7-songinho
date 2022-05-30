// import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import LayoutQuiz from "./quiz/13-qiuz-layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  //  여기에다가 설정하기
  const client = new ApolloClient({
    uri: "http://backend07.codebootcamp.co.kr/graphql", // 백엔드 주소
    cache: new InMemoryCache(),
  });

  return (
    // 모든 페이지가 useMutation을 사용가능하게끔 함 ApolloProvider
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <LayoutQuiz>
        <Component {...pageProps} />
      </LayoutQuiz>
    </ApolloProvider>
  );
}

export default MyApp;

// 모든 페이지가 시작되기 전에 맨 처음 1번 시작되는 파일
