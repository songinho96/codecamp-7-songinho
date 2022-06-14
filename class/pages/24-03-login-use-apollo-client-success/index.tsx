import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../src/commons/store";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

// const FETCH_USER_LOGED_IN = gql`
//   query fetchUserLoggedIn {
//     fetchUserLoggedIn {
//       email
//       name
//       _id
//     }
//   }
// `;

function LoginSuccessPage() {
  const [userInfo] = useRecoilState(userInfoState);
  // const { data } = useQuery(FETCH_USER_LOGED_IN);
  // const router = useRouter();

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인 후 이용 가능합니다!!!");
  //     router.push("./23-04-login-check");
  //   }
  // }, []);

  return <div>{userInfo.name} 님 환영합니다.</div>;
}

export default withAuth(LoginSuccessPage);
