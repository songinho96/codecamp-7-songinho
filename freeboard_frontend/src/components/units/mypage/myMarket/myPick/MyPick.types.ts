import { ChangeEvent, MouseEvent } from "react";

export interface IMyPickPresenterProps {
  data?: any;
  refetch: any;
  onClickMoveToDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  pickCount: {
    fetchUseditemsCountIPicked: number;
  };
  onClickSeeButton: () => void;
}

export interface Iel {
  _id?: string;
  name?: string;
  price: number;
  soldAt: string;
  seller?: {
    name?: string;
  };
  createdAt?: string;
  images: string[];
  useditemAddress?: {
    address?: string;
  };
}

export interface IProductImageProps {
  soldAt: string;
}
