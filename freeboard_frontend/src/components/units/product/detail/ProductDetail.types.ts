export interface IProductDetailPresenterProps {
  data?: any;
  onClickEdit: () => void;
  onClickBasket: () => void;
  isBasket: boolean;
  onClickDelete: () => void;
  onClickPick: () => void;
  onClickBuy: () => void;
  seller: boolean;
}
