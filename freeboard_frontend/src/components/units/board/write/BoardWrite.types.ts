import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
  boardData?: any;
  error?: any;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: String;
  };
}

export interface IBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  isActive: boolean;
  isEdit: boolean;
  boardData?: any;
  isModalVisible: boolean;
  showModal: () => void;
  handleComplete: (data: any) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  zipcode: string;
  address: string;
  onClickbackDetail: () => void;
  onClickbackList: () => void;
  inputRef: any;
  handleCancel: () => void;
  isBackVisible: boolean;
  onClickhandleOk: () => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  fileUrls: string[];
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
