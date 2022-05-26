import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px auto;
  /* margin: 100px; */
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  box-sizing: border-box;
  font-size: 16px;
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

export const MainTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
  padding-bottom: 80px;
  font-weight: 700;
`;

export const WrapperWritePassword = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 40px;
`;

export const WraprWriter = styled.div``;

export const Label = styled.div`
  font-size: 16px;
  padding-bottom: 16px;
`;

export const Writer = styled.input`
  width: 486px;
  height: 53px;
  margin-right: 40px;
  padding-left: 10px;
`;

export const WrapPassword = styled.div``;

export const Password = styled.input`
  width: 486px;
  height: 53px;
  padding-left: 10px;
`;

export const WrapperTitle = styled.div`
  width: 100%;
  padding-bottom: 40px;
`;

export const Title = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 10px;
`;

export const WrapperContents = styled.div`
  width: 100%;
  padding-bottom: 16px;
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  padding-left: 10px;
  padding-top: 10px;
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
  border: 1px solid black;

  color: #bdbdbd;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  background-color: black;
  color: white;
`;

export const Address = styled.input`
  width: 996px;
  height: 52px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const AddressDetail = styled.input`
  width: 996px;
  height: 52px;
  margin-bottom: 30px;
  padding-left: 10px;
`;

export const WrapperYoutube = styled.div`
  padding-bottom: 40px;
`;

export const YoutubeLink = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 10px;
`;

export const WrapperPicture = styled.div`
  width: 100%;
  padding-bottom: 40px;
`;

export const WrapUpload = styled.div``;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  margin-right: 24px;
`;

export const WrapperSetting = styled.div`
  width: 100%;
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

export const WrapperSubmit = styled.div``;

export const SubmitButton = styled.button`
  background-color: ${(props) => (props.isActive ? "yellow" : "default")};
  width: 179px;
  height: 52px;
`;
