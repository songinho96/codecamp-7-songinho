// import styled from "@emotion/styled";
// import { useRouter } from "next/router";
// import MyProductChargePage from "../../charge";

// const Wrapper = styled.div`
//   height: 156px;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
// `;

// const WrapButton = styled.div`
//   display: flex;
// `;

// const LoginButton = styled.button`
//   width: 118px;
//   height: 38px;
//   margin-right: 20px;
//   cursor: pointer;
// `;

// const SignButton = styled.button`
//   width: 118px;
//   height: 38px;
//   cursor: pointer;
//   margin-right: 20px;
// `;

// export default function Header() {
//   const router = useRouter();
//   const onClickTitle = () => {
//     router.push(`/boards`);
//   };

//   const onClickLogin = () => {
//     router.push(`/login`);
//   };

//   const onClickSign = () => {
//     router.push(`/signup`);
//   };

//   return (
//     <Wrapper>
//       <WrapTitle onClick={onClickTitle}>
//         <Title1>&#123; &#125;</Title1>
//         <Title2>PORTFOLIO</Title2>
//       </WrapTitle>
//       <WrapButton>
//         <LoginButton onClick={onClickLogin}>로그인</LoginButton>
//         <SignButton onClick={onClickSign}>회원가입</SignButton>
//         <MyProductChargePage />
//       </WrapButton>
//     </Wrapper>
//   );
// }

import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState, basketPageState } from "../../../store";
import { useRouter } from "next/router";
import MyProductChargePage from "../../charge";
import { Modal } from "antd";

const LOG_OUT = gql`
  mutation logoutUser {
    logoutUser
  }
`;

const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      userPoint {
        amount
      }
    }
  }
`;

const Basket = styled.div`
  background-image: url("/images/circle.png");
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  position: sticky;
  z-index: 10;
  border-bottom: 1px solid rgb(238, 238, 238);
  top: 0px;
  left: 0px;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Head = styled.div`
  width: 1024px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const WrapInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Title1 = styled.div`
  font-weight: 800;
  font-size: 60px;
  padding-right: 20px;
  color: #ffc107;
`;

const Title2 = styled.div`
  font-weight: 800;
  font-size: 40px;
`;

const Main = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
  margin: 0 auto;
`;

const Label = styled.div`
  padding-left: 20px;
  cursor: pointer;
  padding-right: 5px;
`;

const WrapBasket = styled.div`
  display: flex;
`;

const Underline = styled.div`
  width: 100%;
  border-bottom: 1px solid #555555;
`;

export default function Header() {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [logoutUser] = useMutation(LOG_OUT);

  const { onClickMoveToPage } = useMoveToPage();
  const { data } = useQuery(FETCH_USER_LOGGEDIN);

  const onClickCharge = () => {
    // console.log("asd");
  };

  const onClickLogout = async () => {
    try {
      await logoutUser;
      setAccessToken("");
      localStorage.clear();
      router.push("/products/login");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const [basketPage, setBasketPage] = useRecoilState(basketPageState);

  // const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const baksets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketPage(baksets);
  }, []);

  const onClickTitle = () => {
    router.push(`/boards`);
  };

  return (
    <Wrapper>
      <Head>
        <WrapInfo>
          <Label>
            {data
              ? `${data?.fetchUserLoggedIn.name}님 포인트 ${data?.fetchUserLoggedIn.userPoint.amount} P`
              : ""}
          </Label>
          <Label onClick={data ? onClickCharge : onClickMoveToPage("/login")}>
            {data ? <MyProductChargePage /> : "로그인"}
          </Label>
          <Label onClick={data ? onClickLogout : onClickMoveToPage("/signup")}>
            {data ? "로그아웃" : "회원가입"}
          </Label>
          <WrapBasket>
            <Label>장바구니</Label>
            <Basket>{basketPage.length}</Basket>
          </WrapBasket>
        </WrapInfo>
      </Head>
      <Underline></Underline>
      <Main>
        <WrapTitle onClick={onClickTitle}>
          <Title1>&#123; &#125;</Title1>
          <Title2>PORTFOLIO</Title2>
        </WrapTitle>
      </Main>
    </Wrapper>
  );
}
