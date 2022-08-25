import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ILoginPresenterProps {
  onClickMoveSignup: () => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickSubmit: (data: any) => void;
}

export interface ILoginButtonProps {
  isActive: boolean;
}
