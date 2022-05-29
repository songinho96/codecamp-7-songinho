import { useState } from "react";
import BoardCommentItemUI from "./BoardCommentItem.presenter";

export default function BoardCommentItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");
  const onClickEdit = (event) => {
    setIsEdit(true);
    setEditId(event.target.id);
  };

  return (
    <BoardCommentItemUI
      setIsEdit={setIsEdit}
      onClickEdit={onClickEdit}
      isEdit={isEdit}
      el={props.el}
      onClickDelete={props.onClickDelete}
      editId={editId}
      setEditId={setEditId}
    />
  );
}
