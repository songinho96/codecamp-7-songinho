import { ChangeEvent } from "react";

export interface IBoardCommentListUIProps {
  onClickDelete: any;
  data?: any;
  handleChange: (value: any) => void;
  value: number;
  isModalVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  loadFunc: () => void;
}

export interface Iel {
  _id?: string;
  writer?: string;
  contents?: string;
  createdAt?: string;
  rating?: number;
  user?: {
    _id?: string;
  };
}
