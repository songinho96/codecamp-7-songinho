// import "../styles/globals.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createUploadLink } from "apollo-upload-client";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Layout from "../src/components/commons/layout";
import { RecoilRoot, useSetRecoilState } from "recoil";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { createContext, useState } from "react";
import { accessTokenState } from "../src/commons/store";
import ApolloSetting from "../src/components/commons/apollo";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxwW7WvsK_J7gPA9-oinmTj0TetyxumTo",
  authDomain: "codecamp-songinho-07.firebaseapp.com",
  projectId: "codecamp-songinho-07",
  storageBucket: "codecamp-songinho-07.appspot.com",
  messagingSenderId: "886722074089",
  appId: "1:886722074089:web:021ba82f0c460c5787a778",
};

// Context-Api
export const GlobalContext = createContext({
  isEdit: "",
  setIsEdit: (_: any) => {},
});

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  //  여기에다가 설정하기
  // // Login
  // const [accessToken, setAccessToken] = useSetRecoilState(accessTokenState);

  // // Context-Api
  // const [isEdit, setIsEdit] = useState(true);

  // const uploadLink = createUploadLink({
  //   uri: "http://backend07.codebootcamp.co.kr/graphql", // 백엔드 주소
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  // });

  // const client = new ApolloClient({
  //   link: ApolloLink.from([uploadLink as unknown as ApolloLink]), // 명확한 타입이 없어 이렇게 작성하라고 DOCS에 나와있다.

  //   cache: new InMemoryCache(),
  // });

  // Context-Api
  const [isEdit, setIsEdit] = useState(true);

  return (
    <GlobalContext.Provider value={{ isEdit, setIsEdit }}>
      {/* 모든 페이지가 useMutation을 사용가능하게끔 함 ApolloProvider */}
      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </GlobalContext.Provider>
  );
}

export default MyApp;

// 모든 페이지가 시작되기 전에 맨 처음 1번 시작되는 파일
