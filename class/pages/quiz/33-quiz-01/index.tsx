import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      likeCount
      _id
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;
export default function OptimisticUIPage() {
  const { data, refetch } = useQuery(FETCH_BOARD, {
    variables: { boardId: "62b1772403610b002998fc5e" },
  });
  const [likeBoard] = useMutation(LIKE_BOARD);
  const onClickLike = async () => {
    await likeBoard({
      variables: { boardId: "62b1772403610b002998fc5e" },
      optimisticResponse: {
        likeBoard: (data.fetchBoard.likeCount || 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "62b1772403610b002998fc5e" },
          data: {
            fetchBoard: {
              _id: "62b1772403610b002998fc5e",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
    // refetch();
  };
  return (
    <div>
      <div>좋아요:{data?.fetchBoard.likeCount} </div>
      <button onClick={onClickLike}>좋아요 버튼</button>
    </div>
  );
}
