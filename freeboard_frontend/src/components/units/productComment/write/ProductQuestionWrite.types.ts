import { Dispatch, SetStateAction } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IProductQuestionWriteContainerProps {
  editId?: string;
  setIsEdit?: Dispatch<SetStateAction<boolean>> | any;
  isEdit?: boolean | any;
  el?: any;
}

export interface IProductQuestionWritePresenterProps {
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickComment: (data: any) => void;
  onClickUpdate: (data: any) => void;
  isEdit: boolean;
  onClickBackButton: () => void;
}
