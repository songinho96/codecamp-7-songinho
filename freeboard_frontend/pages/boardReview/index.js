import * as S from '../../styles/emotionReview'
import { useState } from 'react'

export default function BoardsNewPage() {

  // useState onChagne
  const [writer, setWriter] = useState("")
  const [password, setPassword] = useState("")
  const [subject, setSubject] = useState("")
  const [contents, setContents] = useState("")

  // useState Error
  const [writerError, setWriterError] = useState("이름을 입력해주세요")
  const [passwordError, setPasswordError] = useState("비밀번호를 입력해주세요")
  // const [subjectError, setSubjectError] = useState("")
  // const [contentsError, setContentsError] = useState("")

  // onChange()
  const onChangeWriter = (event) => {
    setWriter(event.target.value)
    if (event.target.value === "") {
      setWriterError("이름을 입력해주세요");
    } else {
      setWriterError("");
    }
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
    if (event.target.value === "") {
      setPasswordError("비밀번호를 입력해주세요");
    } else {
      setPasswordError("");
    }
  }

  const onChangeSubject = (event) => {
    setSubject(event.target.value)
    // if (event.target.value !== "") {
    //   setSubjectError("")
    // }
  }

  const onChangeContents= (event) => {
    setContents(event.target.value)
    // if (event.target.value !== "") {
    //   setContentsError("")
    // }
  }

  const onClickSubmit = () => {
    if (writer === "") {
      setWriterError("작성자를 입력해주세요.");
    }
    // if (password === "") {
    //   setWriterError("비밀번호를 입력해주세요.")
    // }
    // if (subject === "") {
    //   setSubjectError("제목을 입력해주세요.")
    // }
    // if (contents === "") {
    //   setContentsError("내용을 입력해주세요.")
    // }
    if (writer !== "" && password !== "" && subject !== "" && contents !== "") {
      alert("게시글이 등록되었습니다.")
    }
  }



  return (
    <S.Wrapper>
      <S.Title>게시물 등록</S.Title>

      <S.WrapperWritePassword>

        <S.WraprWriter>
          <S.Label>작성자</S.Label>
          {/* <S.Writer type="text" /> */}
          <S.Writer type="text" placeholder="이름을 적어주세요" onInput={onChangeWriter}  />
          <S.Error>{writerError}</S.Error>
        </S.WraprWriter>

        <S.WrapPassword>
          <S.Label>비밀번호</S.Label>
          {/* <S.Password type="text" /> */}
          <S.Password type="password" placeholder='비밀번호를 입력해주세요.' onChange={onChangePassword} />
          <S.Error>{passwordError}</S.Error>
        </S.WrapPassword>
      </S.WrapperWritePassword>

      <S.WrapperSubject>
        <S.Label>제목</S.Label>
        {/* <S.Subject type="text" /> */}
        <S.Subject type="text" placeholder='제목을 작성해주세요.' onChange={onChangeSubject}/>
        {/* <Error>{subjectError}</Error> */}
      </S.WrapperSubject>

      <S.WrapperContents>
        <S.Label>내용</S.Label>
        {/* <S.Contents type="text" /> */}
        <S.Contents type="text" placeholder='내용을 작성해주세요.' onChange={onChangeContents} />
        {/* <Error>{contentsError}</Error> */}
      </S.WrapperContents>

      <S.WrapperAddress>
        <S.Label>주소</S.Label>
        <S.WrapZipcode>
          <S.Zipcode type="text" placeholder='07250' readonly />
          <S.SearchButton>우편번호 검색</S.SearchButton>
        </S.WrapZipcode>
        <S.Address type="text" readonly />
        <S.Address type="text" />
      </S.WrapperAddress>

      <S.WrapperYoutube>
        <S.Label>유튜브</S.Label>
        <S.YoutubeLink type="text" placeholder='링크를 복사해주세요.' />
      </S.WrapperYoutube>

      <S.WrapperPicture>
        <S.Label>사진 첨부</S.Label>
        <S.WrapUpload>
          <S.UploadButton>+</S.UploadButton>
          <S.UploadButton>+</S.UploadButton>
          <S.UploadButton>+</S.UploadButton>
        </S.WrapUpload>
      </S.WrapperPicture>

      <S.WrapperSetting>
        <S.Label></S.Label>
        <S.WrapperRadio>
          <S.WrapRadio>
            <S.RadioButton type="radio" name='radioButton'></S.RadioButton>
            <S.RadioLabel>유튜브</S.RadioLabel>
          </S.WrapRadio>
          <S.WrapRadio>
            <S.RadioButton type='radio' name='radioButton'></S.RadioButton>
            <S.RadioLabel>사진</S.RadioLabel>
          </S.WrapRadio>
        </S.WrapperRadio>
      </S.WrapperSetting>

      <S.WrapperSubmit>
        {/* <S.SubmitButton></S.SubmitButton> */}
        <S.SubmitButton onClick={onClickSubmit}>등록하기</S.SubmitButton>
      </S.WrapperSubmit>

    </S.Wrapper>



  )
}