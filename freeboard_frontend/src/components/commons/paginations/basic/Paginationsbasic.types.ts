import { MouseEvent } from "react";

export interface IPaginationbasicProps {
  dataCount: any;
  refetch: any;
}

export interface IPaginationbasicUIProps {
  onClickNext: () => void;
  onClickPage: (event: MouseEvent<HTMLDivElement>) => void;
  onClickPrev: () => void;
  lastPage: number;
  startPage: number;
  isActive: boolean;
  activePage: number;
  onClickStart: () => void;
  onClickLast: () => void;
}

export interface IPaginationProps {
  isActive: boolean;
}
