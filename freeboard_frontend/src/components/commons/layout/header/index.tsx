import styled from "@emotion/styled";
import { useRouter } from "next/router";
import MyProductChargePage from "../../charge";

const Wrapper = styled.div`
  height: 156px;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
  margin-right: 20px;
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
    router.push(`/login`);
  };

  const onClickSign = () => {
    router.push(`/signup`);
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
        <MyProductChargePage />
      </WrapButton>
    </Wrapper>
  );
}
