import { useMoveToPage } from "../../hooks/useMoveToPage";
import * as S from "./SearchbarMymarket.styles";

export default function SearchbarMymarketSoldPresenter(props) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper>
      <S.WrapMove>
        <S.Myproduct onClick={onClickMoveToPage("/mypage/mymarket/myproducts")}>
          판매 상품
        </S.Myproduct>
      </S.WrapMove>
      <S.WrapMove>
        <S.Mypick onClick={onClickMoveToPage("/mypage/mymarket/mypick")}>
          찜한 상품
        </S.Mypick>
      </S.WrapMove>
    </S.Wrapper>
  );
}
