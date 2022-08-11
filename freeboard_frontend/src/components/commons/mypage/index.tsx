import { RightOutlined } from "@ant-design/icons";
import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import React from "react";
import { useMoveToPage } from "../hooks/useMoveToPage";
import { getDate } from "../libraries/utils";
const Wraaper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0 40px 0;
`;

const MyPage = styled.div`
  font-weight: 400;
  color: #959595;
`;

const WrapProfile = styled.div`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  padding-bottom: 25px;
  width: 120px;
  height: 120px;
`;

const ProfileDate = styled.div`
  color: #72787f;
  font-size: 0.8rem;
  padding-bottom: 20px;
`;

const ProfileName = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  padding-bottom: 15px;
`;

const ProfilePoint = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const WrapCount = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 7px;
`;

const Label = styled.div`
  font-size: 0.9rem;
  color: #000;
`;

const Count = styled.div`
  font-weight: 700;
`;

const WrapMoveToClick = styled.div``;

const MyClickMove = styled.div`
  cursor: pointer;
`;

const Image = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const WrapClickMove = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding-bottom: 30px;
`;

const FETCH_USER_LOGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      createdAt
      _id
      userPoint {
        _id
        amount
      }
    }
  }
`;

const FETCH_USED_ITEMS_COUNT_I_SOLD = gql`
  query fetchUseditemsCountISold {
    fetchUseditemsCountISold
  }
`;

const FETCH_USED_ITEMS_COUNT_I_BOUNT = gql`
  query fetchUseditemsCountIBought {
    fetchUseditemsCountIBought
  }
`;

export default function MypageSidebar() {
  const { data } = useQuery(FETCH_USER_LOGED_IN);
  const { data: soldData } = useQuery(FETCH_USED_ITEMS_COUNT_I_SOLD);
  const { data: boughtData } = useQuery(FETCH_USED_ITEMS_COUNT_I_BOUNT);
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <Wraaper>
        <WrapTitle>
          <MyPage>Home </MyPage>
          <RightOutlined style={{ color: "#959595", fontWeight: "400" }} />
          <MyPage>나의 메뉴</MyPage>
        </WrapTitle>
        <WrapProfile>
          <ProfileImage src="/detailBoard/profile-Icon.svg" />
          {/* <ProfileName> {data?.fetchUserLoggedIn.email}</ProfileName> */}
          <ProfileName>{data?.fetchUserLoggedIn.name}</ProfileName>
          <ProfileDate>
            {getDate(data?.fetchUserLoggedIn.createdAt)} 시작
          </ProfileDate>
          <ProfilePoint>
            <Image src="/product/point.svg" />
            {data?.fetchUserLoggedIn.userPoint.amount.toLocaleString(
              "ko-KR"
            )}{" "}
            원
          </ProfilePoint>
          <WrapCount>
            <Label>올린 상품</Label>
            <Count>{soldData?.fetchUseditemsCountISold}</Count>
          </WrapCount>
          <WrapCount>
            <Label>구매 상품</Label>
            <Count>{boughtData?.fetchUseditemsCountIBought}</Count>
          </WrapCount>
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
