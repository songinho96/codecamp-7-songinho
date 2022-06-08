import { gql, useQuery } from "@apollo/client";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
      email
      _id
    }
  }
`;

export default function LoginSuccessPage() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (!accessToken) {
      alert("로그인해주세요");
      router.push("./22-quiz-01-login");
    }
  }, []);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>;
}
