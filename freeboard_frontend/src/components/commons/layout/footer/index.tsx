import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 285px;
  background-color: #495057;
`;

const WrapIcon = styled.div`
  display: flex;
  padding-bottom: 30px;
`;

const Wrapinfo = styled.div`
  font-size: 20px;
  padding-bottom: 5px;
`;

const Wrapfooter = styled.div`
  font-size: 15px;
`;

const Icon = styled.div`
  cursor: pointer;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icons = styled.img`
  width: 40px;
`;

const Address = styled.div`
  padding-top: 10px;
  font-size: 0.7rem;
`;

export default function Footer() {
  const onClickUrlGit = () => {
    window.open("https://github.com/songinho96", "_blank");
  };

  const onClickUrlVelog = () => {
    window.open("https://velog.io/@songinho96", "_blank");
  };
  return (
    <Wrapper>
      <WrapIcon>
        <Icon onClick={onClickUrlGit}>
          <Icons src="/images/git.png" />
          <Address>https://github.com/songinho96</Address>
        </Icon>
        <Icon onClick={onClickUrlVelog}>
          <Icons src="/images/velog.svg" />
          <Address>https://velog.io/@songinho96</Address>
        </Icon>
        <Icon>
          <Icons src="/images/gmail.png" />
          <Address>inhosong96@gmail.com</Address>
        </Icon>
      </WrapIcon>
      <Wrapinfo>송인호</Wrapinfo>
      <Wrapinfo>익명 게시판 / 중고마켓</Wrapinfo>
      <Wrapfooter>@ 2022 </Wrapfooter>
    </Wrapper>
  );
}
