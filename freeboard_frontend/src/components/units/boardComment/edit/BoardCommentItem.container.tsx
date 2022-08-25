import { MouseEvent, useState } from "react";
import BoardCommentItemUI from "./BoardCommentItem.presenter";
import { IBoardCommentItemProps } from "./BoardCommentItem.types";

export default function BoardCommentItem(props: IBoardCommentItemProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");
  const onClickEdit = (event: MouseEvent<HTMLImageElement>) => {
    setIsEdit(true);
    setEditId(event.currentTarget.id);
  };

  return (
    <BoardCommentItemUI
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
