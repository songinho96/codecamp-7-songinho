import { ChangeEvent } from "react";

export interface IProductListPresenterProps {
  data?: any;
  loadFunc: () => void;
  settings: any;
  onClickList: (el: any) => (event: any) => void;
  onClickMoveWrite: () => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  BestData?: any;
  onClickSold: () => void;
  onClickSell: () => void;
  isSold: boolean;
}

export interface IisSoldProps {
  isSold: boolean;
}

export interface IsoldAtProps {
  soldAt: string;
}

export interface Iel {
  name: string;
  price: number;
  tags: string[];
  _id: string;
  remarks: string;
  contents: string;
  images: string[];
  createdAt: string;
  pickedCount: number;
  soldAt: string;
}
