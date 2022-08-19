import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { useMoveToPage } from "../../hooks/useMoveToPage";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: #fed602;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const List = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
`;

const GoBoard = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: black;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    font-size: 1.7rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;

export default function Navigation() {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <Wrapper>
      <List>
        {/* <GoBoard onClick={onClickMoveToPage("/")}>나의 메뉴2</GoBoard>
        <GoBoard onClick={onClickMoveToPage("/")}>나의 메뉴1</GoBoard> */}
        <GoBoard onClick={onClickMoveToPage("/boards")}>익명 게시판</GoBoard>
        <GoBoard onClick={onClickMoveToPage("/products")}>중고마켓</GoBoard>
        <GoBoard onClick={onClickMoveToPage("/mypage/mymarket/myproducts")}>
          마이 페이지
        </GoBoard>
      </List>
    </Wrapper>
  );
}
