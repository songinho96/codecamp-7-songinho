import { gql, useQuery } from "@apollo/client";
import React from "react";

const FETCH_BOARDS_OF_THE_BEST = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      writer
      _id
    }
  }
`;

export default function BestBoards() {
  const { data } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  console.log(data);
  return (
    <>
      {data?.fetchBoardsOfTheBest.map((el) => (
        <div key={el._id}>{el.writer}</div>
      ))}
    </>
  );
}
