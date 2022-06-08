import styled from "@emotion/styled";
import { Popover, Image } from "antd";

export const Pop = styled(Popover)``;

export const Wrapper = styled.div`
  width: 80%;
  margin: 100px auto;
  box-sizing: border-box;
  font-size: 20px;
  border: 1px solid black;
`;

export const WrapperCard = styled.div`
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  border: none;
`;
// 메인

// 헤더

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProfileIcon = styled.img`
  height: 46px;
  width: 46px;
  margin-right: 15px;
`;

export const WrapperProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoWriter = styled.div`
  font-size: 24px;
`;

export const InfoDate = styled.div`
  font-size: 16px;
  color: #828282;
`;

export const WrapperHeaderIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ShareIcon = styled.img`
  height: 13px;
  width: 26px;
`;

export const LocationIcon = styled.img`
  height: 26px;
  width: 18px;
  margin-left: 30px;
`;

// 언더라인
export const Underline = styled.div`
  width: 100%;
  border-top: 1px solid #bdbdbd;
  padding-bottom: 80px;
`;

// 게시글 바디

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subject = styled.div`
  font-size: 36px;
  font-weight: bold;
  padding-bottom: 40px;
`;

export const WrapperContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Picture = styled(Image)`
  padding-bottom: 40px;
  width: 200;
  margin-right: 12px;
`;

export const Contents = styled.div`
  margin-top: 100px;
  overflow: hidden;
  word-wrap: break-word;
  width: 996px;
  border: none;
`;

export const Video = styled.div`
  padding-bottom: 163px;
`;

export const WrapperThumbs = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputThumbs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  /* margin: 0 auto; */
`;

export const ThumsNumber = styled.div``;

export const LikeIcon = styled.img`
  height: 18px;
  width: 20px;
  margin-bottom: 4px;
`;

export const DisLikeIcon = styled.img`
  height: 20px;
  width: 22px;
  margin-bottom: 1px;
`;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 87px;
  padding-bottom: 87px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  margin: 0px 24px;
  background-color: white;
  border: 1px solid #bdbdbd;
  cursor: pointer;
`;

export const Underline2 = styled.div`
  border-top: 1px solid gray;
`;

export const Images = styled.div`
  width: 200px;
`;
