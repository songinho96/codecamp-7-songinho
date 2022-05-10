import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 640px;
  height: 1138px;
  border: 1px solid black;
  padding: 36px 50px 0px 36px;
  margin: auto;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

// search
export const Search = styled.div`
  text-align: end;
  margin-bottom: 40px;
`;


// 타이틀
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 60px;

  div {
    display: flex;
    flex-direction: row;
    
  }
`;

export const My = styled.div`
  font-size: 43px;
  font-weight: bold;
`;

export const Face = styled.div`
  margin-right: 20px;
`;

export const Name = styled.div`
  margin-right: 20px;
`;

export const Next = styled.div`

`;


// 공지 리스트
export const List = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #cacaca;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 60px;
`;


export const Notice = styled.div`

`;

export const Event = styled.div`

`;

export const FAQ = styled.div`
  color: #ff1b6d;
  border-bottom: 2px solid red;
`;

export const QNA = styled.div`

`;


// 밑줄

export const UnderLine = styled.div`
  border-bottom: 1px solid #cacaca;
  margin-bottom: 29px;
`;


// 질문
export const Qus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    margin-bottom: 14px;
  }
`;

export const QuestionTop = styled.div`
  font-size: 18px;
  color: #adadad;
`;

export const QustionBottom = styled.div`
  font-size: 24px;
  color: #444444;
`;

export const BottomArrow = styled.div`

`;


// Footer
export const Home = styled.div`

`;

export const ItsLoad = styled.div`

`;

export const Heart = styled.div`
  background: url("./././");
`;

export const Me = styled.div`
  color: #ff1b6d;
`;

export const Footer = styled.div`
  margin-top: 55px;
  font-size: 16px;
  color: #adadad;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;