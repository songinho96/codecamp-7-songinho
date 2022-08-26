import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Iel } from "../list/BoardCommentList.types";

export interface IBoardCommentWriteProps {
  setIsEdit?: Dispatch<SetStateAction<boolean>> | any;
  isEdit?: boolean;
  editId?: string;
  el?: Iel;
}

export interface IUpdateBoardCommentInput {
  contents?: string;
  rating?: number;
}

export interface IBoardCommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickComments: () => void;
  onClickUpdate: () => void;
  onClickBackButton: () => void;
  writerError: string;
  passwordError: string;
  contentsError: string;
  data?: any;
  isActive: boolean;
  contents: string;
  handleChange: (value: any) => void;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  isEdit: boolean | any;
  el?: Iel;
}

export interface ICommentButtonProps {
  isActive: boolean;
}
