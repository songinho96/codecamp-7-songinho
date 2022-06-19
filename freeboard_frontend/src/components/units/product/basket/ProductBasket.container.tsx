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
  width: 25%;
`;

const ProductImage = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 20px;
  margin-bottom: 20px;
  border: 1px solid #d1d1d6;
`;

export default function ProductBasketContainer() {
  const [basketItems, setBasketItems] = useState<IBasketItems[]>([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);

  const onClickBasketDelete = (el: any) => () => {
    const Delete = basketItems.filter(
      (basketEl: any) => basketEl._id !== el._id
    );
    localStorage.setItem("baskets", JSON.stringify(Delete));
    location.reload();
  };

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
          <MyColumn>상품명:{el.name}</MyColumn>
          <MyColumn>가격:{el.price}</MyColumn>
          <button onClick={onClickBasketDelete(el)}>게시물삭제</button>
        </MyRow>
      ))}
    </div>
  );
}
