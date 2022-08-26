import { useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../list/ProductQuestionList.queries";
import ProductQuestionItemPresenter from "./ProductQuestionItem.presenter";
import { IProductQuestionItemContainerProps } from "./ProductQuestionItem.types";

export default function ProductQuestionItemContainer(
  props: IProductQuestionItemContainerProps
) {
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const [isAnswer, setIsAnswer] = useState(false);
  const [answerId, setAnswerId] = useState("");

  const { data: UserData } = useQuery(FETCH_USER_LOGGED_IN);

  const onClickAnswerImg = (event: MouseEvent<HTMLImageElement>) => {
    setIsAnswer((prev) => !prev);
    setAnswerId(event.currentTarget.id);
  };

  const onClickEdit = (event: MouseEvent<HTMLImageElement>) => {
    setIsEdit((prev) => !prev);
    setEditId(event.currentTarget.id);
  };

  // 아이디 일치 확인
  const myId = props.el?.user._id.includes(UserData?.fetchUserLoggedIn._id);

  return (
    <ProductQuestionItemPresenter
      setIsEdit={setIsEdit}
      onClickEdit={onClickEdit}
      el={props.el}
      onClickDelete={props.onClickDelete}
      isEdit={isEdit}
      editId={editId}
      setEditId={setEditId}
      // Answer
      onClickAnswerImg={onClickAnswerImg}
      isAnswer={isAnswer}
      answerId={answerId}
      setIsAnswer={setIsAnswer}
      // 질문자
      myId={myId}
    />
  );
}
