import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  height: 156px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.img`
  width: 400px;
  height: 200px;
`;

const WrapButton = styled.div`
  display: flex;
`;

const LoginButton = styled.button`
  width: 118px;
  height: 38px;
  margin-right: 20px;
  cursor: pointer;
`;

const SignButton = styled.button`
  width: 118px;
  height: 38px;
  cursor: pointer;
`;

const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Title1 = styled.div`
  font-weight: 800;
  font-size: 70px;
  padding-right: 20px;
  color: #ffc107;
`;

const Title2 = styled.div`
  font-weight: 800;
  font-size: 50px;
`;

export default function Header() {
  const router = useRouter();
  const onClickTitle = () => {
    router.push(`/boards`);
  };

  const onClickLogin = () => {
    router.push(`/`);
  };

  const onClickSign = () => {
    router.push(`/`);
  };

  return (
    <Wrapper>
      <WrapTitle onClick={onClickTitle}>
        <Title1>&#123; &#125;</Title1>
        <Title2>PORTFOLIO</Title2>
      </WrapTitle>
      <WrapButton>
        <LoginButton onClick={onClickLogin}>로그인</LoginButton>
        <SignButton onClick={onClickSign}>회원가입</SignButton>
      </WrapButton>
    </Wrapper>
  );
}
