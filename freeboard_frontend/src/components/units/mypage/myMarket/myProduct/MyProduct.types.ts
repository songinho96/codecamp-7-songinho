import { ChangeEvent, MouseEvent } from "react";

export interface IMyProductPresenterProps {
  data?: any;
  onClickMoveToDetail: (event: MouseEvent<HTMLDivElement>) => void;
  soldCount: {
    fetchUseditemsCountISold: number;
  };
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  refetch: any;
}

export interface Iel {
  _id: string;
  name: string;
  price: number;
  createdAt: string;
  soldAt: string;
  images: string[];
  useditemAddress: {
    address: string;
  };
}

export interface IProductImageProps {
  soldAt: string;
}
