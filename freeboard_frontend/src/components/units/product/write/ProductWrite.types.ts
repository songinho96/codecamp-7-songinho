import { Dispatch, SetStateAction } from "react";
import { FieldValues, FormState, UseFormRegister } from "react-hook-form";

export interface IProductWriteContainerProps {
  productData: any;
  isEdit: boolean;
}

export interface IProductWritePresenterProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: any;
  formState: FormState<FieldValues>;
  onClickSubmit: (data: any) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  fileUrls: string[];
  onChangeContents: (value: string) => void;
  editorRef: any;
  onClickUpdate: (data: any) => void;
  isEdit: boolean;
  productData?: any;
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
  isModalVisible: boolean;
  zipcode: string;
  address: string;
  showModal: () => void;
  handleComplete: (data: any) => void;
  setAddress: Dispatch<SetStateAction<string>>;
}
