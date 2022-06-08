import styled from "@emotion/styled";

export const Error = styled.div`
  color: red;
`;

export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: 100px auto;
  font-size: 20px;
  border: 1px solid black;
  background: url("/login/macbook.avif") no-repeat center; // no-repert: 이미지 반복x  center: 가운데배치
  background-size: cover;
  object-fit: fill;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  opacity: 0.5;
`;

export const WrapMainTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainIcon = styled.div``;

export const MainTitle = styled.div`
  font-size: 60px;
  padding-bottom: 30px;
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const WrapperSocialSignup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialButton = styled.img`
  width: 570px;
  height: 64px;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 40px;
`;

export const WrapperEmailSignup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Label = styled.div`
  text-align: start;
  padding: 20px 0;
  font-size: 25px;
`;

export const InputSign = styled.input`
  width: 578px;
  height: 64px;
  color: black;
`;

export const SignupButton = styled.button`
  width: 578px;
  height: 64px;
  margin-top: 50px;
  color: black;
  background-color: yellow;
  font-size: 30px;
`;

export const WrapperDivideLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
`;

export const DivideLine = styled.div`
  width: 600px;
  border-top: 1px solid black;
  margin: 0px 20px;
`;

export const WrapperFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FooterLabel = styled.div`
  padding: 20px;
  font-size: 30px;
`;

export const FooterLabelLog = styled.div`
  text-decoration: underline;
  cursor: pointer;
  font-size: 30px;
`;
