import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const Row = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  width: 30%;
`;

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function FetchBoardPage() {
  const [isBaskets, setIsBaskets] = useState(false);
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setIsBaskets(baskets);

    // const temp = baskets.filter((basketEl) => basketEl._id === el._id); // [{...}]
    // if (temp.length === 1) {
    //   alert("이미 담으신 물품입니다!!!");
    //   return;
    // }

    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    console.log(el._id);

    if (!Baskets(el._id)) {
      const Delete = baskets.filter((basketEl: any) => basketEl._id !== el._id);
      localStorage.setItem("baskets", JSON.stringify(Delete));
    }
  };

  const Baskets = (id: any) => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    const temp = baskets.filter((basketEl: any) => basketEl._id === id);
    return temp.length === 1;
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el._id}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <button onClick={onClickBasket(el)}>
            {Baskets(el._id) ? "게시물삭제" : "게시물담기"}
          </button>
        </Row>
      ))}
    </>
  );
}
