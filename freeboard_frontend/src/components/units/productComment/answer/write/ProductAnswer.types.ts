import { Dispatch, MouseEvent, SetStateAction } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IProductAnswerContainerProps {
  refetch?: any;
  isAnswerEdit?: boolean | any;
  setIsAnswerEdit?: Dispatch<SetStateAction<boolean>> | any;
  answerEditId?: string;
  firstId?: string;
  answerData?: any;
  setIsAnswer?: Dispatch<SetStateAction<boolean>> | any;
  isAnswer?: boolean | any;
  answerId?: string;
  el?: any;
  onClickAnswerImg?: (event: MouseEvent<HTMLImageElement>) => void;
}

export interface IProductAnswerPresenterProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickAnswer: (data: any) => void;
  onClickAnswerUpdate: (daata: any) => void;
  isAnswer: boolean;
  onClickBackButton: () => void;
  isAnswerEdit: boolean;
  onClickBackButtonEdit: () => void;
}
