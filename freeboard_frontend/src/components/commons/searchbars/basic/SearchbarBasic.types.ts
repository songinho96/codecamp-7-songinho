import { ChangeEvent } from "react";

export interface ISearchbarBasicPresenterProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
