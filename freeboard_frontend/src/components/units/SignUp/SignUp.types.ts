import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ISignUpPresenterProps {
  onClickMoveLogin: () => void;
  onClickSubmit: (data: any) => void;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
}

export interface ISignupButtonProps {
  isActive: boolean;
}
