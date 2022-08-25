export interface IMyPointPresenterProps {
  isPoint: string;
  onClickFetchAllPoint: () => void;
  onClickFetcChargePoint: () => void;
  onClickFetchPaidPoint: () => void;
  onClickFetchSellPoint: () => void;
  allData?: any;
  chargeData?: any;
  paidData?: any;
  sellData?: any;
  allRefetch: any;
  chargeRefetch: any;
  paidRefetch: any;
  sellRefetch: any;
  chargeCount: {
    fetchPointTransactionsCountOfLoading: number;
  };
  sellCount: {
    fetchPointTransactionsCountOfSelling: number;
  };
  paidCount: {
    fetchPointTransactionsCountOfBuying: number;
  };
  allCount: number;
}

export interface IisPointProps {
  isPoint: string;
}
