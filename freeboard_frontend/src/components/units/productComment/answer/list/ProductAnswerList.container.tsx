import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import React, { MouseEvent } from "react";
import ProductAnswerListPresenter from "./ProductAnswerList.presenter";
import {
  DELETE_USED_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "./ProductAnswerList.queries";
import { IProductAnswerListContainerProps } from "./ProductAnswerList.types";

export default function ProductAnswerListContainer(
  props: IProductAnswerListContainerProps
) {
  const { data: answerData, refetch } = useQuery(
    FETCH_USED_ITEM_QUESTION_ANSWERS,
    {
      variables: { useditemQuestionId: props.el._id },
    }
  );

  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_QUESTION_ANSWER
  );

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: event.currentTarget.id,
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_USED_ITEM_QUESTION_ANSWERS,
        //     variables: {
        //       useditemId: answerData?.fetchUseditemQuestionAnswers._id,
        //     },
        //   },
        // ],
      });
      refetch();
      Modal.success({ title: "삭제 성공", content: "댓글이 삭제 되었습니다!" });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <div>
      <ProductAnswerListPresenter
        answerData={answerData}
        onClickDelete={onClickDelete}
        refetch={refetch}
      />
    </div>
  );
}
