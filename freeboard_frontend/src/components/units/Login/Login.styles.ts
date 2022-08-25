import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { ILoginButtonProps } from "./Login.types";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 100px auto;
  font-size: 1.25rem;
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

  @media ${breakPoints.tablet} {
    padding: 30px 10px;
  }

  @media ${breakPoints.mobile} {
    padding: 30px 10px;
  }
`;

export const WrapMainTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainIcon = styled.div``;

export const MainTitle = styled.div`
  font-size: 3.75rem;
  padding-bottom: 30px;

  @media ${breakPoints.tablet} {
    font-size: 3rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 2.3rem;
  }
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    justify-content: center;
  }

  @media ${breakPoints.tablet} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: 2.5rem;

  @media ${breakPoints.tablet} {
    font-size: 2.3rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.8rem;
  }
`;

export const WrapperEmailLogin = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Label = styled.div`
  padding: 20px 0;
  font-size: 1.563rem;

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;

export const InputEmail = styled.input`
  width: 500px;
  height: 64px;
  color: black;
  border-radius: 10px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 55px;
    font-size: 0.9rem;
  }
`;

export const Error = styled.div`
  font-size: 0.75rem;
  color: red;
`;

export const InputPassword = styled.input`
  width: 500px;
  height: 64px;
  color: black;
  border-radius: 10px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 55px;
    font-size: 0.9rem;
  }
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
  font-size: 1rem;
`;

export const LoginButton = styled.button`
  width: 500px;
  height: 64px;
  margin-top: 50px;
  font-size: 1.875rem;
  background-color: ${(props: ILoginButtonProps) =>
    props.isActive ? "yellow" : "#A7A7A7"};
  color: black;
  margin-bottom: 40px;
  border-radius: 10px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 55px;
    font-size: 1.5rem;
  }
`;

export const DivideLine = styled.div`
  height: 170px;
  width: 0.02vw;
  border-width: 0;
  background-color: white;
`;

export const Or = styled.div`
  font-size: 1.875rem;
`;

export const WrapperSocialLogin = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialButton = styled.img`
  width: 500px;
  height: 64px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const WrapperDivideLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
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
  font-size: 1.875rem;
  padding: 40px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    font-size: 1.4rem;
    padding: 20px;
  }

  @media ${breakPoints.mobile} {
    font-size: 1rem;
    padding: 10px;
  }
`;
