import styled from "@emotion/styled";
import { useMoveToPage } from "../../hooks/useMoveToPage";

const Wrapper = styled.div`
  height: 100px;
  background-color: #495057;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.div`
  display: flex;
`;

const GoBoard = styled.div`
  padding-left: 80px;
  font-size: 30px;
  font-weight: 700;
  color: white;
  cursor: pointer;
`;

export default function Navigation() {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <Wrapper>
      <List>
        <GoBoard onClick={onClickMoveToPage("/")}>나의 메뉴2</GoBoard>
        <GoBoard onClick={onClickMoveToPage("/")}>나의 메뉴1</GoBoard>
        <GoBoard onClick={onClickMoveToPage("/boards")}>게시판</GoBoard>
        <GoBoard onClick={onClickMoveToPage("/products")}>중고마켓</GoBoard>
        <GoBoard onClick={onClickMoveToPage("/mypage/mymarket/myproducts")}>
          마이 페이지
        </GoBoard>
      </List>
    </Wrapper>
  );
}
