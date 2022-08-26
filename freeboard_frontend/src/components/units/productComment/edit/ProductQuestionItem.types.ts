import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface IProductQuestionItemContainerProps {
  key: string;
  el: {
    _id: string;
    contents: string;
    createdAt: string;
    user: {
      email: string;
      _id: string;
      name: string;
    };
  };
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
}

export interface IProductQuestionItemPresenterProps {
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  onClickEdit: (event: MouseEvent<HTMLImageElement>) => void;
  el: {
    _id: string;
    contents: string;
    createdAt: string;
    user: {
      email: string;
      _id: string;
      name: string;
    };
  };
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
  isEdit: boolean;
  editId: string;
  setEditId: Dispatch<SetStateAction<string>>;
  onClickAnswerImg: (event: MouseEvent<HTMLImageElement>) => void;
  isAnswer: boolean;
  answerId: string;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;
  myId: boolean;
}
