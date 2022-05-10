import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 640px;
  height: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: gray;
  background-image: url("/images/img-bg.png");
`;


export const Header = styled.div`
  padding-top: 224px;
  padding-bottom: 162px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LocationIcon = styled.img`
  width: 100px;
  height: 100px;
  color: white;
`;

export const Title = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: white;
`;

export const Body = styled.div`
  padding-bottom: 61px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const Log = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
  align-items: center;
`;

export const Email = styled.input`
  width: 540px;
  height: 30px;
  font-size: 24px;
  color: white;
  background: #000000; 
  background : rgba(0, 0, 0, 0);
  border: none;
`;

export const Underline = styled.div`
  width: 540px;
  border-top: 1px solid white;
  padding-bottom: 10px;
`;

export const EmailError = styled.div`
  width: 540px;
  height: 20px;
  color: red;
`;

export const XButton = styled.img`
  width: 20px;
  height: 20px;

`;

export const Password = styled.input`
  width: 540px;
  height: 30px;
  font-size: 24px;
  color: white;
  background: #000000; 
  background : rgba(0, 0, 0, 0);
  border: none;
`;

export const PasswordError = styled.div`
  width: 540px;
  height: 20px;
  color: red;
`;

export const LoginWrapper = styled.div`
  padding-bottom: 44px;
`;

export const Login = styled.button`
  width: 540px;
  height: 76px;
  font-size: 26px;
  font-weight: bold;
  color: white;
  border-radius: 38px;
  background-color: #ff1b6d;
  opacity:0.7;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
`;

export const Next = styled.div`
  padding: 0 30px;
`;

export const SearchEmail = styled.div`
  
`;

export const SearchPassword = styled.div`
  
`;

export const Sign = styled.div`
  
`;

export const Footer = styled.div`
  
`;

export const Kakao = styled.div`
  padding-bottom: 83px;
`;

export const KakaoImage = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 20px;
  
`;

export const KakaoLogin = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 540px;
  height: 76px;
  border-radius: 38px;
  background: #000000; 
  background : rgba(0, 0, 0, 0);
  border: solid 2px #fae100;
`;

export const KakaoInput = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: #fae100;
`;


