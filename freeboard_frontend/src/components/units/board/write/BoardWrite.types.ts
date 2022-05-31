import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
  boardData?: any;
  error?: any;
}

export interface IUpdateBoardInput {
  title?: String;
  contents?: String;
  youtubeUrl?: String;
  boardAddress?: {
    zipcode?: String;
    address?: String;
    addressDetail?: String;
  };
}

export interface IBoardWriteUIProps {
  data: any;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  writerError: String;
  passwordError: String;
  titleError: String;
  contentsError: String;
  isActive: boolean;
  isEdit: boolean;
  boardData?: any;
  isModalVisible: boolean;
  showModal: () => void;
  // handleOk={handleOk}
  // handleCancel={handleCancel}
  handleComplete: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  zipcode: String;
  address: String;
  value: String;
}
