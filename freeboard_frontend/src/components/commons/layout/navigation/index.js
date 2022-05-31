import styled from "@emotion/styled";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const onClickBoard = () => {
    router.push("/boards");
  };

  const onClickMyPage = () => {
    router.push("/");
  };
  return (
    <Wrapper>
      <List>
        <GoBoard>나의 메뉴2</GoBoard>
        <GoBoard>나의 메뉴1</GoBoard>
        <GoBoard onClick={onClickBoard}>게시판</GoBoard>
        <GoBoard>중고마켓</GoBoard>
        <GoBoard onClick={onClickMyPage}>마이 페이지</GoBoard>
      </List>
    </Wrapper>
  );
}
