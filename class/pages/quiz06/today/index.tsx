import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Row = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  width: 20%;
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
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    const aaa = JSON.parse(localStorage.getItem("baskets") || "[]");
    const bbb = aaa.filter((el) => el.Date === CurrentDate);
    setCurrent(bbb);
  }, [current]);

  const [isBaskets, setIsBaskets] = useState(false);
  const { data } = useQuery(FETCH_BOARDS);

  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");

  const CurrentDate = `${yyyy}-${mm}-${dd}`;

  const onClickBasket = (el) => () => {
    //  date 받아오기
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");

    const CurrentDate = `${yyyy}-${mm}-${dd}`;

    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setIsBaskets(baskets);

    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    newEl.Date = CurrentDate;
    localStorage.setItem("baskets", JSON.stringify(baskets));
    // console.log(el._id);

    if (!Baskets(el._id)) {
      const Delete = baskets.filter((basketEl: any) => basketEl._id !== el._id);
      localStorage.setItem("baskets", JSON.stringify(Delete));
    }

    // const CheckDate = (el) => {
    //   const Baskets = localStorage.getItem("baskets");
    //   if (CurrentDate === newEl.Date) {
    //     console.log(Baskets);
    //   }
    // };
    // CheckDate(el);
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
      ================================================================================================================================
      ================================================================================================================================
      ================================================================================================================================
      {current.map((el) => (
        <Row key={el._id}>
          <Column>{el._id}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>{el.Date}</Column>
        </Row>
      ))}
    </>
  );
}
