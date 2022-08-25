import { MouseEvent } from "react";

export interface IProductAnswerListContainerProps {
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
}

export interface IProductAnswerListPresenterProps {
  answerData: any;
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
  refetch: any;
}

export interface Iel {
  _id: string;
  contents: string;
  createdAt: string;
  user: {
    email: string;
    _id: string;
    name: string;
  };
}
