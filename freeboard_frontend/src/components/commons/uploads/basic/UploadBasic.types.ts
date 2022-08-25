import { ChangeEvent, RefObject } from "react";

export interface IUploadBasicContainerProps {
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  index: number;
  fileUrl: string;
}

export interface IUploadBasicPresenterprops {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  onClickImage: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
