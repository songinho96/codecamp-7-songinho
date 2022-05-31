import styled from "@emotion/styled";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

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
  padding-right: 10px;
`;

export default function Footer() {
  return (
    <Wrapper>
      <WrapIcon>
        <Icon>
          <FacebookIcon style={{ fontSize: "40px" }} />
        </Icon>
        <Icon>
          <InstagramIcon style={{ fontSize: "40px" }} />
        </Icon>
        <Icon>
          <TwitterIcon style={{ fontSize: "40px" }} />
        </Icon>
      </WrapIcon>
      <Wrapinfo>Info﹒Support﹒Marketing</Wrapinfo>
      <Wrapinfo>Terms of Use﹒Privacy Policy</Wrapinfo>
      <Wrapfooter>@ 2022 Clarity Money</Wrapfooter>
    </Wrapper>
  );
}
