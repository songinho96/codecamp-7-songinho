export interface IPaidPointPresenterProps {
  paidData: {
    fetchPointTransactionsOfBuying: {
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
  user: {
    name: string;
  };
}
