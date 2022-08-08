import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ProductAnswerPresenter from "./ProductAnswer.presenter";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./ProductAnswer.queries";
import * as yup from "yup";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../../list/ProductQuestionList.queries";

const schema = yup.object({
  contents: yup.string().required("답변사항을 입력해주세요."),
});

export default function ProductAnswerContainer(props) {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );

  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );
  const onClickAnswer = async (data) => {
    try {
      const result = await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            ...data,
          },
          useditemQuestionId: props.answerId,
        },

        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.answerId },
          },
        ],
      });

      Modal.success({ title: "답변 등록!", content: "답변이 등록되었습니다." });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
    props.setIsAnswer((prev) => !prev);
  };

  const onClickAnswerUpdate = async (data) => {
    try {
      console.log(props.answerId);
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            ...data,
          },
          useditemQuestionAnswerId: props.answerEditId,
        },
      });
      props.refetch();
      props.setIsAnswerEdit((prev) => !prev);
      Modal.success({ title: "수정 성공", content: "답글이 수정 되었습니다!" });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickBackButton = () => {
    props.setIsAnswer(false);
  };

  const onClickBackButtonEdit = () => {
    props.setIsAnswerEdit(false);
  };

  return (
    <div>
      <ProductAnswerPresenter
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        onClickAnswer={onClickAnswer}
        onClickAnswerUpdate={onClickAnswerUpdate}
        isAnswer={props.isAnswer}
        onClickBackButton={onClickBackButton}
        isAnswerEdit={props.isAnswerEdit}
        onClickBackButtonEdit={onClickBackButtonEdit}
      />
    </div>
  );
}
