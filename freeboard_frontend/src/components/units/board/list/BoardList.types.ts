import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { MouseEvent } from "react";

export interface IBoardListUIProps {
  data?: any;
  onClickMoveBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMoveBoardNew: () => void;
  refetch(
    variables?: Partial<OperationVariables> | undefined
  ): Promise<ApolloQueryResult<any>>;
  refetchCount: (
    variables: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<any>>;
  keyword: string;
  setKeyword: any;
  dataCount: number;
}

export interface Iel {
  writer: string;
  title: string;
  _id: string;
  createdAt: string;
}

export interface IWord {
  isMatched: boolean;
}
