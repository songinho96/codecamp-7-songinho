import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { ISignupButtonProps } from "./SignUp.types";

export const Error = styled.div`
  color: red;
  font-size: 0.875rem;
  padding: 10px 0px 0px 10px;
`;

export const Wrapper = styled.div`
  font-size: 1, 25rem;
  background-color: #f8f8f8;

  /* background: url("/login/Background Image-1.png"), no-repeat center; // no-repert: 이미지 반복x  center: 가운데배치
  background-size: cover;
  object-fit: fill;
  color: white; */
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 100px 0;

  @media ${breakPoints.tablet} {
    padding: 30px 10px;
  }

  @media ${breakPoints.mobile} {
    padding: 30px 10px;
  }
`;

export const WrapSign = styled.div`
  background-color: white;
  width: 50%;
  margin: 0 auto;
  padding: 30px 0;

  @media ${breakPoints.tablet} {
    background-color: #f8f8f8;
    width: 100%;
    padding: 0;
  }

  @media ${breakPoints.mobile} {
    background-color: #f8f8f8;
    width: 100%;
    padding: 0;
  }
`;

export const WrapMainTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainIcon = styled.div``;

export const MainTitle = styled.div`
  font-size: 3rem;
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
    flex-direction: column-reverse;
    justify-content: center;
  }

  @media ${breakPoints.tablet} {
    flex-direction: column-reverse;
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

export const WrapperEmailSignup = styled.div`
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
  text-align: start;
  padding: 20px 0;
  font-size: 1.563rem;

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;

export const InputSign = styled.input`
  width: 578px;
  height: 64px;
  color: black;
  border-radius: 16px;
  padding: 20px 16px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 55px;
    font-size: 0.9rem;
  }
`;

export const SignupButton = styled.button`
  cursor: pointer;
  width: 578px;
  height: 64px;
  margin-top: 50px;
  color: black;
  background-color: yellow;
  font-size: 1.675rem;
  background-color: ${(props: ISignupButtonProps) =>
    props.isActive ? "#FED503" : "#A7A7A7"};
  border-radius: 16px;
  transition-duration: 0.5s;
  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 55px;
    font-size: 1.5rem;
  }
`;

export const WrapperDivideLine = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px 0px; */
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

export const DivideLine = styled.div`
  /* width: 600px;
  border-top: 1px solid black;
  margin: 0px 20px; */
  height: 170px;
  width: 0.01vw;
  border-width: 0;
  background-color: white;
`;

export const Or = styled.div`
  font-size: 1.875rem;
`;

export const WrapperFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FooterLabel = styled.div`
  padding: 20px;
  font-size: 1.875rem;

  @media ${breakPoints.tablet} {
    font-size: 1.5rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;

export const FooterLabelLog = styled.div`
  text-decoration: underline;
  cursor: pointer;
  font-size: 1.875rem;

  @media ${breakPoints.tablet} {
    font-size: 1.5rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;
