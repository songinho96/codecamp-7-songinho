import React, { useState } from "react";
import ProductAnswerEditPresenter from "./ProductAnswerEdit.presenter";

export default function ProductAnswerEditContainer(props) {
  const [isAnswerEdit, setIsAnswerEdit] = useState(false);
  const [answerEditId, setAnswerEditId] = useState("");

  const onClickEdit = (event) => {
    setIsAnswerEdit((prev) => !prev);
    setAnswerEditId(event.target.id);
  };

  return (
    <div>
      <ProductAnswerEditPresenter
        refetch={props.refetch}
        onClickDelete={props.onClickDelete}
        key={props.el._id}
        el={props.el}
        onClickEdit={onClickEdit}
        isAnswerEdit={isAnswerEdit}
        answerEditId={answerEditId}
        setIsAnswerEdit={setIsAnswerEdit}
        setAnswerEditId={setAnswerEditId}
        answerData={props.answerData}
      />
    </div>
  );
}
