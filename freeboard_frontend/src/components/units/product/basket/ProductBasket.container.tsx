import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

interface IBasketItems {
  _id: string;
  name: string;
  price: number;
  images: string;
}

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 300px;
`;

const WrapProduct = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductImage = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 20px;
  margin-bottom: 20px;
  border: 1px solid #d1d1d6;
`;

export default function ProductBasketContainer() {
  const [basketItems, setBasketItems] = useState<IBasketItems[]>([]);

  const onClickBasketDelete = (el: any) => () => {
    const Delete = basketItems.filter(
      (basketEl: any) => basketEl._id !== el._id
    );
    localStorage.setItem("baskets", JSON.stringify(Delete));
    location.reload();
  };

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);

  return (
    <div>
      {basketItems.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>
            <ProductImage
              src={
                el.images[0]
                  ? `https://storage.googleapis.com/${el.images[0]}`
                  : "/list/noimage.gif"
              }
            />
          </MyColumn>
          <WrapProduct>
            <MyColumn>상품명:{el.name}</MyColumn>
            <MyColumn>가격:{el.price}</MyColumn>
          </WrapProduct>
          <button onClick={onClickBasketDelete(el)}>장바구니 삭제</button>
        </MyRow>
      ))}
    </div>
  );
}
