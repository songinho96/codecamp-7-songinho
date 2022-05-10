import {Wrapper, Body, Header, Sign, Sign1, Id, Password, Title1, Title, Detail, Detail1, Address, Address1, ZipCode, AddressDetail, Youtube, Photo, Photo2, PhotoPush, MainSetting, Setting, Submit, SubmitFinish, Error } from '../../../styles/emotion'
import { useState } from 'react'

export default function MyPage() {
  const [change, setChange] = useState("")

  const [ChangeWriteError, setChangeWriteError] = useState("")

  function onChangeWrite(event) {
    setChange(event.target.value)
  }

  function onClickSignup() {
    if (change === "") {
      setChangeWriteError("빈칸입니다.")
    }
  }




  return (
  <Wrapper>
    <Body>
      {/* 해더 */}
      <Header>
        <h1>게시물 등록</h1>
      </Header>

      {/* 회원정보 */}
      <Sign>
        <Sign1>
          <div>작성자</div>
          <Id type="text" placeholder="이름을 적어주세요" onChange={onChangeWrite} />
          <Error>{ChangeWriteError}</Error>
        </Sign1>
        <Sign1>
          <div>비밀번호</div>
          <Password type="password" placeholder='비밀번호를 입력해주세요.' onChange={onChangeWrite}/>
          <Error>{ChangeWriteError}</Error>
        </Sign1>
      </Sign>

      {/* 제목 */}
      <Title>
        <div>제목</div>
        <Title1 type="text" placeholder='제목을 작성해주세요.' onChange={onChangeWrite}/>
        <Error>{ChangeWriteError}</Error>
      </Title>

      {/* 내용 */}
      <Detail>
        <div>내용</div>
        <Detail1 type="text" placeholder='내용을 작성해주세요.'  onChange={onChangeWrite}/>
        <Error>{ChangeWriteError}</Error>
      </Detail>
      
      {/* 주소 */}
      <Address>
        <div>주소</div>
        <Address1>
          <ZipCode type="text" placeholder='07250' />
          <button>우편번호 검색</button>
        </Address1>
        <AddressDetail type="text" onChange={onChangeWrite}/>
        <Error>{ChangeWriteError}</Error>
        <AddressDetail type="text" onChange={onChangeWrite}/>
        <Error>{ChangeWriteError}</Error>
      </Address>

      {/* 유튜브 */}
      <Youtube>
        <div>유튜브</div>
        <AddressDetail type="text" placeholder='링크를 복사해주세요.' onChange={onChangeWrite} />
        <Error>{ChangeWriteError}</Error>
      </Youtube>

      {/* 사진 첨부 */}

      <Photo>
        <div>사진 첨부</div>
        <Photo2>
          <PhotoPush type="text" />
          <PhotoPush type="text" />
          <PhotoPush type="text" />
        </Photo2> 
      </Photo>

      {/* 메인 설정 */}
      <MainSetting>
        <div>메인 설정</div>
        <div>
          <Setting type="radio" name="setting"/> 유튜브
          <Setting type="radio" name="setting"/> 사진
        </div>
      </MainSetting>


      {/* 등록하기 */}
      <Submit>
        <SubmitFinish onClick={onClickSignup}>등록하기</SubmitFinish>
      </Submit>
    </Body>
  </Wrapper>
)

}

