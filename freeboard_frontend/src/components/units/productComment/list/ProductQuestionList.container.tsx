import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductQuestionListPresenter from "./ProductQuestionList.presenter";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./ProductQuestionList.queries";

export default function ProductQuestionListContainer(props) {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: router.query.boardId },
  });
  console.log(data);
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  const onClickDelete = async (event) => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.boardId },
          },
        ],
      });
      Modal.success({ title: "삭제 성공", content: "댓글이 삭제 되었습니다!" });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const loadFunc = () => {
    if (!data) return;
    fetchMore({
      // 더 받아옴
      variables: {
        page: Math.ceil(data.fetchUseditemQuestions.length / 10) + 1,
      }, // 한 페이지당 10개 다음페이지 까지 불러 와야 하기 때문에 + 1 해준다.
      // fetchMoreResult = 11~20  prev는 1~10
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };

        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions, // 기존꺼 10개
            ...fetchMoreResult.fetchUseditemQuestions, // 다음꺼 10개
          ],
        };
      },
    });
  };

  return (
    <p>
      <ProductQuestionListPresenter
        data={data}
        onClickDelete={onClickDelete}
        loadFunc={loadFunc}
      />
    </p>
  );
}
