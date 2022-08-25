import * as S from "./SearchbarMymarket.styles";
import { useMoveToPage } from "../../../hooks/useMoveToPage";

export default function SearchbarMymarketPickPresenter() {
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
