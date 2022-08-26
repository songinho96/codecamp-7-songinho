import { MouseEvent } from "react";

export interface IProductQuestionListPresenterProps {
  data?: any;
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
  loadFunc: () => void;
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
