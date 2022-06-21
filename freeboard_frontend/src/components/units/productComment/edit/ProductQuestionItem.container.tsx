import { useState } from "react";
import ProductQuestionItemPresenter from "./ProductQuestionItem.presenter";

export default function ProductQuestionItemContainer(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");
  const onClickEdit = (event) => {
    setIsEdit(true);
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
    />
  );
}
