export interface IProductDetailPresenterProps {
  data?: any;
  onClickEdit: () => void;
  onClickBasket: () => void;
  isBaskets: boolean;
  onClickDelete: () => void;
  onClickPick: () => void;
  onClickBuy: () => void;
  seller: boolean;
}
