import { useState } from "react";
import ProductQuestionItemPresenter from "./ProductQuestionItem.presenter";

export default function ProductQuestionItemContainer(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const [isAnswer, setIsAnswer] = useState(false);
  const [answerId, setAnswerId] = useState("");

  const onClickAnswerImg = (event) => {
    setIsAnswer((prev) => !prev);
    setAnswerId(event.target.id);
  };

  const onClickEdit = (event) => {
    setIsEdit((prev) => !prev);
    setEditId(event.target.id);
  };

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
    />
  );
}
