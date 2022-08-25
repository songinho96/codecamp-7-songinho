import { Dispatch, MouseEvent, SetStateAction } from "react";
import { Iel } from "../list/BoardCommentList.types";

export interface IBoardCommentItemProps {
  key: any;
  el: Iel;
  onClickDelete: any;
}

export interface IBoardCommentItemUIProps {
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  onClickEdit: (event: MouseEvent<HTMLImageElement>) => void;
  el: Iel;
  onClickDelete: any;
  isEdit: boolean;
  editId: string;
  setEditId: Dispatch<SetStateAction<string>>;
}
