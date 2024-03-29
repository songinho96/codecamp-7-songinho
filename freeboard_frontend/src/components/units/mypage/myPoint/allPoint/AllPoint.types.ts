export interface IAllPointPresenterProps {
  allData: {
    fetchPointTransactions: {
      _id: string;
      amount: number;
      balance: number;
      status: string;
      statusDetail: string;
      createdAt: string;
      map: any;
    };
  };
}

export interface Iel {
  _id: string;
  amount: number;
  balance: number;
  status: string;
  statusDetail: string;
  createdAt: string;
}
