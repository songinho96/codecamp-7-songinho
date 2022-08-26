import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  UPDATE_USED_ITEM_QUESTION,
} from "./ProductQuestionWrite.queries";
import { Modal } from "antd";

import { useRouter } from "next/router";
import ProductQuestionWritePresenter from "./ProductQuestionWrite.presenter";
import { IProductQuestionWriteContainerProps } from "./ProductQuestionWrite.types";

const schema = yup.object({
  contents: yup.string().required("문의사항을 입력해주세요."),
});

export default function ProductQuestionWriteContainer(
  props: IProductQuestionWriteContainerProps
) {
  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickComment = async (data: any) => {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            ...data,
          },
          useditemId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.boardId },
          },
        ],
      });
      reset();
      Modal.success({
        title: "댓글 등록!",
        content: "댓글 등록되었습니다!",
      });
    } catch (error: any) {
      Modal.error({
        title: "Error 메시지",
        content: error.message,
      });
    }
  };

  const onClickUpdate = async (data: any) => {
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            ...data,
          },
          useditemQuestionId: props.editId,
        },
      });

      Modal.success({ title: "수정 성공", content: "댓글이 수정 되었습니다!" });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
    props.setIsEdit(false);
  };

  const onClickBackButton = () => {
    props.setIsEdit(false);
  };

  return (
    <p>
      <ProductQuestionWritePresenter
        register={register}
        handleSubmit={handleSubmit}
        onClickComment={onClickComment}
        formState={formState}
        onClickUpdate={onClickUpdate}
        isEdit={props.isEdit}
        onClickBackButton={onClickBackButton}
      />
    </p>
  );
}
