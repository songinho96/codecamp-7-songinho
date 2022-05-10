
import {Wrapper, Body, Search, Title, My, Face, Name, Next, List, Notice, Event, FAQ, QNA, UnderLine, Main, Qus, QuestionTop, QustionBottom, BottomArrow, Home, ItsLoad, Heart, Me, Footer } from '../../../styles/quizEmotion'

export default function FAQPage() {


  return (
    <Wrapper>
      <Body>
        <Main>
          {/* search */}
          <Search>search</Search>
          {/* 타이틀 */}
          <Title>
            <My>마이</My>
            <div>
              <Face>face</Face>
              <Name>임정아</Name>
              <Next>Next</Next>
            </div>
          </Title>

          {/* 공지 리스트 */}
          <List>
            <Notice>공지사항</Notice>
            <Event>이벤트</Event>
            <FAQ>FAQ</FAQ>
            <QNA>Q&A</QNA>
          </List>

          {/* 밑줄 */}
          <UnderLine></UnderLine>

          {/* 질문 */}
          <Qus>
            <div>
              <QuestionTop>Q.01</QuestionTop>
              <QustionBottom>리뷰 작성은 어떻게 하나요?</QustionBottom>
            </div>
            <BottomArrow>밑</BottomArrow>
          </Qus>

          <Qus>
            <div>
              <QuestionTop>Q.02</QuestionTop>
              <QustionBottom>리뷰 수정/삭제는 어떻게 하나요?</QustionBottom>
            </div>
            <BottomArrow>밑</BottomArrow>
          </Qus>

          <Qus>
            <div>
              <QuestionTop>Q.03</QuestionTop>
              <QustionBottom>아이디/비밀번호를 잊어버렸어요.</QustionBottom>
            </div>
            <BottomArrow>밑</BottomArrow>
          </Qus>

          <Qus>
            <div>
              <QuestionTop>Q.04</QuestionTop>
              <QustionBottom>회원탈되를 하고 싶어요.</QustionBottom>
            </div>
            <BottomArrow>밑</BottomArrow>
          </Qus>

          <Qus>
            <div>
              <QuestionTop>Q.05</QuestionTop>
              <QustionBottom>출발지 설정은 어떻게 하나요?</QustionBottom>
            </div>
            <BottomArrow>밑</BottomArrow>
          </Qus>

          <Qus>
            <div>
              <QuestionTop>Q.06</QuestionTop>
              <QustionBottom>비밀번호를 변경하고 싶어요.</QustionBottom>
            </div>
            <BottomArrow>밑</BottomArrow>
          </Qus>


          {/* Footer */}
          <Footer>
            <div>
            <Home>홈</Home>
            홈
            </div>
            <div>
            <ItsLoad>잇츠로드</ItsLoad>
            잇츠로드
            </div>
            <div>
            <Heart>마이찜</Heart>
            마이찜
            </div>
            <div>
            <Me>마이</Me>
            마이
            </div>
          </Footer>
        </Main>
      </Body>
    </Wrapper>
  )
}