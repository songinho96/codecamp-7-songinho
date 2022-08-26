import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 1024px;
  border: 1px solid black;
  padding: 80px 102px 100px 102px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 10px;
  }
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  padding-bottom: 80px;
  text-align: center;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WrapProduct = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`;

export const Label = styled.div`
  font-size: 16px;
  padding-bottom: 16px;
`;

export const WrapTags = styled.div`
  width: 800px;
  height: 56px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Error = styled.div`
  font-size: 14px;
  color: red;
`;

// export const InputProduct = styled.input`
//   width: 996px;
//   height: 52px;
// `;

export const WrapDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`;

export const WrapperLocation = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 40px;

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }

  @media ${breakPoints.tablet} {
    flex-direction: column;
  }
`;

export const WrapMap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperGpsLocation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  padding-top: 30px;

  @media ${breakPoints.mobile} {
    margin: 0;
  }

  @media ${breakPoints.tablet} {
    margin: 0;
  }
`;

export const WrapAddress = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapSearch = styled.div`
  display: flex;
`;

export const Address = styled.input`
  width: 500px;
  height: 52px;
  margin-bottom: 30px;

  @media ${breakPoints.tablet} {
    width: 100%;
    padding: 10px;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 10px;
  }
`;

export const WrapperImage = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`;

export const WrapImage = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Image1 = styled.div`
  width: 180px;
  height: 180px;
  background-color: gray;
  margin: 0 20px;
`;

export const WrapperRadioButton = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperRadio = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 80px;
`;

export const WrapRadio = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 15px;
`;

export const Radio = styled.div``;

export const RadioLabel = styled.div``;

export const WrapButton = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

export const SubmitButton = styled.button`
  width: 180px;
  height: 52px;
  color: gray; ;
`;

// 다음 포스트

export const SearchButton = styled.div`
  width: 124px;
  height: 52px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-top: 25px;

  cursor: pointer;

  @media ${breakPoints.tablet} {
    margin-top: 0;
    margin-bottom: 20px;
  }

  @media ${breakPoints.mobile} {
    margin-top: 0;
    margin-bottom: 20px;
  }
`;
