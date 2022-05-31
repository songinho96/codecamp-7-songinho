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
  box-shadow: 0px 16px 48px;
  box-sizing: border-box;
  background-color: white;
`;
// header

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 80px;
`;

export const BestPost = styled.div`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  padding-bottom: 40px;
`;

export const WrapperBest = styled.div`
  background-color: #adb5bd;
  display: flex;
`;

export const WrapBest = styled.div`
  width: 282px;
  height: 257px;
`;

export const BestImage = styled.div``;

export const BestTitle = styled.div``;

export const WrapBestInfo = styled.div``;

export const WrapperProfileInfo = styled.div``;

export const WrapProfile = styled.div``;

export const ProfileIcon = styled.div``;

export const ProfileWriter = styled.div``;

export const WrapDate = styled.div``;

export const WrapperThumbs = styled.div``;

export const Thumbsup = styled.div``;

export const TuumbsCount = styled.div``;

// body
export const Body = styled.div`
  width: 100%;
  padding-bottom: 40px;
`;

export const WrapperSearch = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 40px;
`;

export const InputSearch = styled.input`
  margin-right: 42px;
  width: 776px;
  height: 52px;
  background-color: #f2f2f2;
  border-radius: 10px;
`;

export const DateSearch = styled.input`
  margin-right: 44px;
  width: 244px;
  height: 52px;
  color: #bdbdbd;
  text-align: center;
`;

export const ButtonSearch = styled.button`
  width: 94px;
  height: 52px;
  background-color: black;
  color: white;
  border-radius: 10px;
`;

export const Underline = styled.div`
  border-bottom: 3px solid gray;
`;

export const WrapperTable = styled.div`
  width: 100%;
`;

export const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`;

export const Row = styled.div`
  display: flex;
  padding: 10px 0;
  border-top: 1px solid gray;
`;

export const TitleColumntitle = styled.div`
  width: 60%;
  text-align: center;
`;

export const NumColumn = styled.div`
  width: 10%;
  text-align: center;
`;

export const TitleColumn = styled.div`
  width: 60%;
  text-align: center;
  cursor: pointer;
  :hover {
    color: red;
  }
`;

export const WriterColumn = styled.div`
  width: 20%;
  text-align: center;
`;

export const DateColumn = styled.div`
  width: 20%;
  text-align: center;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  margin-left: 150px;
  box-shadow: 0px 8px 16px;
`;
