import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px auto;
  box-sizing: border-box;
  font-size: 20px;
  border: 1px solid black;
`;

export const WrapMainTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainIcon = styled.div``;

export const MainTitle = styled.div`
  font-size: 40px;
  padding-bottom: 30px;
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 30px;
`;

export const WrapperEmailLogin = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  padding: 10px 0;
`;

export const InputEmail = styled.input`
  width: 354px;
  height: 64px;
`;

export const InputPassword = styled.input`
  width: 354px;
  height: 64px;
`;

export const WrapLoginCheck = styled.div`
  padding-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CheckButton = styled.div`
  padding-right: 10px;
`;

export const LoginCheck = styled.div`
  font-size: 16px;
`;

export const LoginButton = styled.button`
  width: 354px;
  height: 64px;
  margin-top: 10px;
`;

export const DivideLine = styled.div`
  width: 170px;
  height: 0.01vw;
  border-width: 0;
  background-color: #000;
`;

export const WrapperSocialLogin = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialButton = styled.img`
  width: 354px;
  height: 64px;
`;

export const WrapperDivideLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapperFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const UnderLine = styled.div`
  width: 100%;
  margin-top: 70px;
  border-top: 1px solid black;
`;

export const FooterLabel = styled.div`
  padding: 20px;
  cursor: pointer;
`;
