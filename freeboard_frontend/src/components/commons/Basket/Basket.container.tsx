import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { useRouter } from "next/router";

import React, { MouseEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { breakPoints } from "../../../commons/styles/media";
import { basketPageState } from "../../store";

const CREATE_POINT_TRANSATION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      name
    }
  }
`;

const Wrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding-bottom: 150px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  text-align: center;
  margin-top: 40px;

  @media ${breakPoints.tablet} {
    font-size: 2.5rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 2rem;
  }
`;

const WrapBox = styled.div`
  margin-top: 30px;
  width: 100%;
  padding: 20px;
  display: flex;
  border-radius: 30px;
  border: 1px solid #bdbdbd;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

const WrapImgContent = styled.div`
  display: flex;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-bottom: 20px;
  }
`;

const BasketImg = styled.img`
  width: 194px;
  height: 194px;
  border-radius: 15px;
  border: 1px solid #bdbdbd;

  @media ${breakPoints.tablet} {
    width: 180px;
    height: 180px;
  }

  @media ${breakPoints.mobile} {
    width: 170px;
    height: 170px;
    margin-bottom: 20px;
  }
`;

const WrapDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  justify-content: center;

  @media ${breakPoints.mobile} {
    width: 100%;
    margin-left: 0;
  }
`;

const WrapContent = styled.div`
  display: flex;
  align-items: center;

  @media ${breakPoints.mobile} {
    width: 100%;
    justify-content: space-between;
    padding: 0 20px;
  }
`;

const Label = styled.div`
  width: 120px;
  font-size: 1.7rem;
  color: #bdbdbd;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${breakPoints.tablet} {
    font-size: 1.4rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;
const ContentLabel = styled.div`
  font-size: 1.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${breakPoints.tablet} {
    font-size: 1.1rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

const WrapButton = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media ${breakPoints.tablet} {
    flex-direction: column;
    justify-content: space-around;
  }
`;

const Button = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  border-radius: 15px;
  background-color: rgb(233, 231, 231);
  font-size: 1.2rem;
  cursor: pointer;
  :hover {
    background-color: #bdbdbd;
  }
`;

const WrapNoImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

const NoImage = styled.img`
  width: 20%;
`;

const AlertTitle = styled.div`
  padding-top: 20px;
  font-size: 2rem;
  color: #a7a7a7;

  @media ${breakPoints.mobile} {
    font-size: 1.6rem;
  }
`;

const SellButton = styled.div`
  margin-top: 20px;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 40px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: #f5f5f5;
  transition-duration: 0.5s;
  cursor: pointer;
  :hover {
    background-color: #bdbdbd;
    transition-duration: 0.5s;
  }
`;

export default function BasketContainer() {
  const router = useRouter();
  const [basketItems, setBasketItems] = useState([]);
  const [basketPage, setBasketPage] = useRecoilState(basketPageState);

  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSATION_OF_BUYING_AND_SELLING
  );

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, [basketPage.length]);

  const onClickDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/products/${event.currentTarget.id}`);
  };

  const onClickBuy = async (event: MouseEvent<HTMLDivElement>) => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    const temp = baskets.filter(
      (basket: any) => basket._id === event.currentTarget.id
    );
    if (temp.length === 1) {
      const Delete = baskets.filter(
        (baskets: any) => baskets._id !== event.currentTarget.id
      );

      localStorage.setItem("baskets", JSON.stringify(Delete));
      setBasketPage(Delete);
    }
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: event?.currentTarget.id },
      });
      Modal.success({ content: "구매가 완료되었습니다!" });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickBack = () => {
    router.push("/products");
  };

  return (
    <Wrapper>
      <Title>장바구니</Title>
      {basketItems.map((el: any) => (
        <WrapBox key={el._id}>
          <WrapImgContent>
            <BasketImg
              src={
                el.images[0]
                  ? `https://storage.googleapis.com/${el.images[0]}`
                  : "/list/noimage.gif"
              }
              id={el._id}
            />
            <WrapDetail>
              <WrapContent>
                <Label>상품명</Label>
                <ContentLabel>{el.name}</ContentLabel>
              </WrapContent>
              <WrapContent>
                <Label>상품요약</Label>
                <ContentLabel>{el.remarks}</ContentLabel>
              </WrapContent>
              <WrapContent>
                <Label>상품가격</Label>
                <ContentLabel>{el.price}</ContentLabel>
              </WrapContent>
              <WrapContent>
                <Label>거래지역</Label>
                <ContentLabel>
                  {el.useditemAddress?.address
                    ? `${el.useditemAddress?.address}`
                    : "전국"}
                </ContentLabel>
              </WrapContent>
            </WrapDetail>
          </WrapImgContent>
          <WrapButton>
            <Button onClick={onClickDetail} id={el._id}>
              제품 상세
            </Button>
            <Button onClick={onClickBuy} id={el._id}>
              바로 구매
            </Button>
          </WrapButton>
        </WrapBox>
      ))}
      {basketItems.length === 0 && (
        <WrapNoImage>
          <NoImage src="/images/No.svg" />
          <AlertTitle>장바구니에 담긴 상품이 없습니다.</AlertTitle>
          <SellButton onClick={onClickBack}>돌아 가기</SellButton>
        </WrapNoImage>
      )}
    </Wrapper>
  );
}
