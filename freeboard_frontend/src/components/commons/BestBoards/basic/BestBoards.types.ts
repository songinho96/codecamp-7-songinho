import { MouseEvent } from "react";

export interface IBestBoardsPresenterProps {
  data?: any;
  settings: any;
  onClickBestImage: (event: MouseEvent<HTMLImageElement>) => void;
}
