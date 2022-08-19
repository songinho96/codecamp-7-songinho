import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 100px auto;
  font-size: 20px;
  border: 1px solid black;
  background: no-repeat center; // no-repert: 이미지 반복x  center: 가운데배치
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("/login/Frame 1.png");
  background-size: cover;
  object-fit: fill;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  padding: 30px 0px;
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
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 40px;
`;

export const WrapperEmailLogin = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  padding: 20px 0;
  font-size: 25px;
`;

export const InputEmail = styled.input`
  width: 500px;
  height: 64px;
  color: black;
  border-radius: 10px;
`;

export const Error = styled.div`
  font-size: 12px;
  color: red;
`;

export const InputPassword = styled.input`
  width: 500px;
  height: 64px;
  color: black;
  border-radius: 10px;
`;

export const WrapLoginCheck = styled.div`
  padding: 20px 0;
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
  width: 500px;
  height: 64px;
  margin-top: 10px;
  font-size: 30px;
  background-color: yellow;
  color: black;
  margin-bottom: 40px;
  border-radius: 10px;
`;

export const DivideLine = styled.div`
  height: 170px;
  width: 0.02vw;
  border-width: 0;
  background-color: white;
`;

export const Or = styled.div`
  font-size: 30px;
`;

export const WrapperSocialLogin = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialButton = styled.img`
  width: 500px;
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
  width: 90%;
  border-top: 1px solid white;
  margin: 0 auto;
`;

export const FooterLabel = styled.div`
  font-size: 30px;
  padding: 40px;
  cursor: pointer;
`;
