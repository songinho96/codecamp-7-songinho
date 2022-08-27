import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { ISubmitButtonProps } from "./BoardWrite.types";

export const Wrapper = styled.div`
  width: 1024px;
  border: 1px solid #bdbdbd;
  margin: 0 auto;
  padding: 80px 102px 100px 102px;
  display: flex;
  flex-direction: column;
  font-size: 1rem;

  @media ${breakPoints.tablet} {
    width: 100%;
    border: none;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 10px;
    padding-bottom: 70px;
    border: none;
  }
`;
export const WrapBackButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 50px;
`;

export const BackButton = styled.button`
  width: 77px;
  height: 38px;
  margin-bottom: 20px;

  @media ${breakPoints.mobile} {
    width: 60px;
    height: 30px;
    font-size: 0.8rem;
  }
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 0.875rem;
  color: red;
`;

export const MainTitle = styled.div`
  font-size: 2.25rem;
  font-weight: bold;
  padding-bottom: 80px;
  text-align: center;

  @media ${breakPoints.mobile} {
    font-size: 1.8rem;
  }
`;

export const WrapperWritePassword = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 40px;
  width: 100%;

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }

  @media ${breakPoints.tablet} {
    flex-direction: column;
  }
`;

export const WraprWriter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  font-size: 1rem;
  padding-bottom: 16px;

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

export const WrapUpload = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Writer = styled.input`
  width: 350px;
  height: 53px;
  margin-right: 40px;
  padding-left: 10px;
  border: 1px solid gray;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 40px;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const WrapPassword = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Password = styled.input`
  width: 350px;
  height: 53px;
  padding-left: 10px;
  border: 1px solid gray;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 40px;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const WrapperTitle = styled.div`
  padding-bottom: 40px;
`;

export const Title = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 10px;
  border: 1px solid gray;

  @media ${breakPoints.mobile} {
    height: 40px;
  }
`;

export const WrapperContents = styled.div`
  padding-bottom: 16px;
`;

export const Contents = styled.textarea`
  width: 100%;
  height: 480px;
  padding-left: 10px;
  padding-top: 10px;
  resize: none;
  border: 1px solid gray;

  @media ${breakPoints.mobile} {
    height: 300px;
  }
`;

export const WrapperAddress = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapZipcode = styled.div`
  padding-bottom: 16px;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  text-align: center;
  margin-right: 16px;
  border: 1px solid gray;
  color: #bdbdbd;

  @media ${breakPoints.mobile} {
    width: 60px;
    height: 40px;
    font-size: 0.8rem;
  }
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  background-color: black;
  color: white;

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 40px;
    font-size: 0.8rem;
  }
`;

export const Address = styled.input`
  width: 100%;
  height: 52px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  border: 1px solid gray;

  @media ${breakPoints.mobile} {
    height: 40px;
  }
`;

export const AddressDetail = styled.input`
  width: 100%;
  height: 52px;
  margin-bottom: 30px;
  padding-left: 10px;
  border: 1px solid gray;

  @media ${breakPoints.mobile} {
    height: 40px;
  }
`;

export const WrapperYoutube = styled.div`
  padding-bottom: 40px;
`;

export const YoutubeLink = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 10px;
  border: 1px solid gray;

  @media ${breakPoints.mobile} {
    height: 40px;
  }
`;

export const WrapperPicture = styled.div`
  padding-bottom: 40px;
`;

export const WrapperSetting = styled.div`
  padding-bottom: 80px;
`;

export const WrapperRadio = styled.div`
  display: flex;
  flex-direction: row;
`;

export const WrapRadio = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;
  padding-right: 22px;
`;

export const RadioButton = styled.input`
  margin-right: 14px;
`;

export const RadioLabel = styled.div``;

export const WrapperSubmit = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;

export const Wrap = styled.div``;

export const SubmitButton = styled.button`
  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "#212529" : "default"};
  color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "white" : "#212529"};
  width: 179px;
  height: 52px;
  border-radius: 4px;
`;
