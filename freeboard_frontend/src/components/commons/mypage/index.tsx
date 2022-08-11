import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import React from "react";
import { useMoveToPage } from "../hooks/useMoveToPage";
const Wraaper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WrapTitle = styled.div`
  display: flex;
`;

const MyPage = styled.div`
  padding-bottom: 50px;
`;

const WrapProfile = styled.div`
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  padding-bottom: 40px;
  width: 100px;
  height: 100px;
`;

const ProfileName = styled.div`
  font-size: 24px;
  padding-bottom: 10px;
`;

const ProfilePoint = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90px;
`;

const WrapMoveToClick = styled.div``;

const MyClickMove = styled.div`
  padding-bottom: 23px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 20px;
  height: 20px;
`;

const WrapClickMove = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 80px;
`;

const FETCH_USER_LOGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      _id
      userPoint {
        _id
        amount
      }
    }
  }
`;

export default function MypageSidebar() {
  const { data } = useQuery(FETCH_USER_LOGED_IN);
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <Wraaper>
        <WrapTitle>
          <MyPage>Home</MyPage>
          <MyPage>나의 메뉴</MyPage>
        </WrapTitle>
        <WrapProfile>
          <ProfileImage src="/detailBoard/profile-Icon.svg" />
          <ProfileName> {data?.fetchUserLoggedIn.email}</ProfileName>
          <ProfileName>{data?.fetchUserLoggedIn.name}</ProfileName>
          <ProfilePoint>
            <Image src="/product/point.svg" />
            {data?.fetchUserLoggedIn.userPoint.amount} 원
          </ProfilePoint>
        </WrapProfile>
        <WrapMoveToClick>
          <WrapClickMove>
            <Image src="/product/cart.svg" />
            <MyClickMove
              onClick={onClickMoveToPage("/mypage/mymarket/myproducts")}
            >
              내 장터
            </MyClickMove>
          </WrapClickMove>
          <WrapClickMove>
            <Image src="/product/point.svg" />
            <MyClickMove onClick={onClickMoveToPage("/mypage/mypoint")}>
              내 포인트
            </MyClickMove>
          </WrapClickMove>
          <WrapClickMove>
            <Image src="/commentBoard/profile-Icon.svg" />
            <MyClickMove onClick={onClickMoveToPage("/mypage/myprofile")}>
              내 프로필
            </MyClickMove>
          </WrapClickMove>
        </WrapMoveToClick>
      </Wraaper>
    </>
  );
}
