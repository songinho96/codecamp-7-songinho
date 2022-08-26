import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState, basketPageState } from "../../../store";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { breakPoints } from "../../../../commons/styles/media";

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
  background-image: url("/product/circle.png");
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  position: sticky;
  z-index: 10;
  border-bottom: 1px solid rgb(238, 238, 238);
  top: 0px;
  left: 0px;
  background: rgb(255, 255, 255);
`;

const Wrap = styled.div`
  width: 1024px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    flex-direction: column;
  }
`;

const Head = styled.div`
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

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

// const Title1 = styled.div`
//   font-weight: 800;
//   font-size: 60px;
//   padding-right: 20px;
//   color: #ffc107;

//   @media ${breakPoints.tablet} {
//     font-size: 55px;
//   }

//   @media ${breakPoints.mobile} {
//     font-size: 50px;
//   }
// `;

const Title2 = styled.div`
  font-weight: 800;
  font-size: 40px;
  padding-top: 10px;

  @media ${breakPoints.tablet} {
    font-size: 33px;
  }

  @media ${breakPoints.mobile} {
    font-size: 30px;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;

  @media ${breakPoints.mobile} {
    justify-content: flex-start;
  }
`;

const WrapLog = styled.div`
  display: flex;

  @media ${breakPoints.mobile} {
    margin: 20px 0;
  }
`;

const Label = styled.div`
  padding-left: 20px;
  cursor: pointer;
  padding-right: 5px;
`;

const LabelSell = styled.div`
  padding-left: 20px;
  cursor: pointer;
  padding-right: 5px;
  font-weight: 600;
  color: blue;
`;

const WrapBasket = styled.div`
  display: flex;
`;

const MainIcon = styled.img`
  width: 80px;
  /* height: 60px; */
  margin-right: 10px;
  margin-top: 8px;
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
      // router.push("/products/login");
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
    router.push(`/`);
  };

  return (
    <Wrapper>
      <Wrap>
        <Main>
          <WrapTitle onClick={onClickTitle}>
            {/* <Title1>&#123; &#125;</Title1> */}
            <MainIcon src="/images/Main.svg" />
            <Title2>PORTFOLIO</Title2>
          </WrapTitle>
        </Main>
        <Head>
          <WrapInfo>
            <Label>
              {data
                ? `${
                    data?.fetchUserLoggedIn.name
                  }님 포인트 ${data?.fetchUserLoggedIn.userPoint.amount.toLocaleString(
                    "ko-KR"
                  )} P`
                : ""}
            </Label>
            <WrapLog>
              <Label
                onClick={data ? onClickCharge : onClickMoveToPage("/login")}
              >
                {/* {data ? <MyProductChargePage /> : "로그인"} */}
                {data ? "" : "로그인"}
              </Label>
              <Label
                onClick={data ? onClickLogout : onClickMoveToPage("/signup")}
              >
                {data ? "로그아웃" : "회원가입"}
              </Label>
              <WrapBasket>
                <Label>장바구니</Label>
                <Basket>{basketPage.length}</Basket>
                <LabelSell onClick={onClickMoveToPage("/products/new")}>
                  판매하기
                </LabelSell>
              </WrapBasket>
            </WrapLog>
          </WrapInfo>
        </Head>
      </Wrap>
    </Wrapper>
  );
}
