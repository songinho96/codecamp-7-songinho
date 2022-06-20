import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import React from "react";
const Wraaper = styled.div`
  padding-top: 80px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyPage = styled.div`
  font-size: 50px;
  padding-bottom: 50px;
`;

const WrapProfile = styled.div`
  padding-bottom: 80px;
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

const ProfilePoint = styled.div``;

const WrapMoveToClick = styled.div``;

const MyClickMove = styled.div`
  padding-bottom: 23px;
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

  return (
    <>
      <Wraaper>
        <MyPage>MYPAGE</MyPage>
        <WrapProfile>
          <ProfileImage src="/detailBoard/profile-Icon.svg" />
          <ProfileName> {data?.fetchUserLoggedIn.email}</ProfileName>
          <ProfileName>이름: {data?.fetchUserLoggedIn.name}</ProfileName>
          <ProfilePoint>
            내 포인트: {data?.fetchUserLoggedIn.userPoint.amount} 원
          </ProfilePoint>
        </WrapProfile>
        <WrapMoveToClick>
          <MyClickMove>내 장터</MyClickMove>
          <MyClickMove>내 포인트</MyClickMove>
          <MyClickMove>내 프로필</MyClickMove>
        </WrapMoveToClick>
      </Wraaper>
    </>
  );
}
