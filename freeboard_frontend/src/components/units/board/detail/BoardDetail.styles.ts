import styled from "@emotion/styled";
import { Popover } from "antd";
import { breakPoints } from "../../../../commons/styles/media";

export const Pop = styled(Popover)``;

export const Wrapper = styled.div`
  width: 1024px;
  margin: 100px auto;
  box-sizing: border-box;
  font-size: 1.25rem;
  border: 1px solid #bdbdbd;

  @media ${breakPoints.tablet} {
    width: 100%;
    margin: 50px auto;
    border: none;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    margin: 50px auto;
    border: none;
  }
`;

export const WrapperCard = styled.div`
  border: 1px solid black;
  padding: 80px 102px 0 102px;
  display: flex;
  flex-direction: column;
  border: none;

  @media ${breakPoints.tablet} {
    padding: 50px 50px 0 50px;
  }

  @media ${breakPoints.mobile} {
    padding: 50px 10px 0px 10px;
  }
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

  @media ${breakPoints.mobile} {
    width: 40px;
    height: 40px;
  }
`;

export const WrapperProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoWriter = styled.div`
  font-size: 1.5rem;

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;

export const InfoDate = styled.div`
  font-size: 1rem;
  color: #828282;

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
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

  @media ${breakPoints.mobile} {
    padding-bottom: 30px;
  }
`;

// 게시글 바디

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subject = styled.div`
  font-size: 2.25rem;
  font-weight: bold;
  padding-bottom: 20px;

  @media ${breakPoints.mobile} {
    font-size: 1.8rem;
  }
`;

export const WrapperContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Contents = styled.div`
  margin: 50px 0;
  overflow: hidden;
  word-wrap: break-word;
  width: 100%;
  border: none;
`;

export const Video = styled.div`
  padding-bottom: 100px;
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
  padding-top: 37px;
  padding-bottom: 87px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  margin: 0px 24px;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: #bdbdbd;
  }
`;

export const Underline2 = styled.div`
  border-top: 1px solid gray;
`;

export const Images = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

export const DetailImage = styled.div`
  margin: 0 30px;
  width: 300px;
  height: 300px;
`;

export const Image = styled.img`
  width: 200px;
  height: 300px;

  @media ${breakPoints.mobile} {
    margin: 30px;
  }
`;
