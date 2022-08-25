import { MouseEvent } from "react";

export interface IPaginationPickProps {
  pickCount: {
    fetchUseditemsCountIPicked: number;
  };
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
  pickCount: {
    fetchUseditemsCountIPicked: number;
  };
}

export interface IPaginationProps {
  isActive: boolean;
}
