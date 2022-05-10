import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 100px;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Body = styled.div`
  margin: 60px 0px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 80px;
  justify-content: center;
`;

// 작성자, 비밀번호
export const Sign = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

export const Sign1 = styled.div`
  
`;

export const Id = styled.input`
  width: 486px;
  height: 52px;
  margin-right: 24px;
`;

export const Password = styled.input`
  width: 486px;
  height: 52px;
`;

// 제목
export const Title = styled.div`
  margin-bottom: 40px;
`;

export const Title1 = styled.input`
  margin-top: 16px ;
  width: 996px;
  height: 52px;
`;


// 내용
export const Detail = styled.div`
  margin-bottom: 16px;
`;

export const Detail1 = styled.input`
  margin-top: 16px;    
  width: 996px;
  height: 480px;
`;

// 주소
export const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Address1 = styled.div`
  margin-bottom: 16px;

  button {
    width: 124px;
    height: 52px;
    background-color: black;
    color: white;
  }
`;

export const ZipCode = styled.input`
  width: 77px;
  height: 52px;
  margin-right: 16px;
  text-align: center;
`;

export const AddressDetail = styled.input`
  width: 996px;
  height: 52px;
  margin-bottom: 30px;
`;

// 유튜브
export const Youtube = styled.div`
  div {
    margin-bottom: 16px;
  }
`;

// 사진 첨부
export const Photo = styled.div`

`;

export const Photo2 = styled.div`

`;


export const PhotoPush = styled.input`
  width: 78px;
  height: 78px;
  background-color: gray;
  margin-right: 24px;
  border: none;
`;

// 메인 설정
export const MainSetting = styled.div`
  margin-top: 40px;
`;

export const Setting = styled.input`
  margin-top: 18px;
`;

// 등록 하기
export const Submit = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SubmitFinish = styled.button`
  
  width: 179px;
  height: 52px;
  background-color: #ffd600;
  text-align: center;
`;

export const Error = styled.div`
  color: red;
`;