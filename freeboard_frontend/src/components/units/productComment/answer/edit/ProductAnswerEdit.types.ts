import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface IProductAnswerEditContainerProps {
  el: any;
  refetch: any;
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
  key: any;
  answerData: any;
}

export interface IProductAnswerEditPresenterProps {
  refetch: any;
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
  key: any;
  el: any;
  onClickEdit: (event: MouseEvent<HTMLImageElement>) => void;
  isAnswerEdit: boolean;
  answerEditId: string;
  setIsAnswerEdit: Dispatch<SetStateAction<boolean>>;
  setAnswerEditId: Dispatch<SetStateAction<string>>;
  answerData: any;
  myId: boolean;
}
