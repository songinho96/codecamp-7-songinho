import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

const Row = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  width: 30%;
`;

interface IBasketItems {
  _id: string;
  writer: string;
  title: string;
}
export default function MapBoardPage() {
  const [basketItems, setBasketItems] = useState<IBasketItems>([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);
  return (
    <>
      {basketItems.map((el) => (
        <Row key={el._id}>
          <Column>{el._id}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
        </Row>
      ))}
    </>
  );
}
