import React from "react";
import * as S from "./imageUpload.styles";

export default function ImageUploadPageUI(props: any) {
  return (
    <S.Wrapper>
      작성자:{" "}
      <S.Input
        type="text"
        id="writer"
        onChange={props.onChangeInputs}
      ></S.Input>
      비밀번호:{" "}
      <S.Input
        type="text"
        id="password"
        onChange={props.onChangeInputs}
      ></S.Input>
      제목:{" "}
      <S.Input type="text" id="title" onChange={props.onChangeInputs}></S.Input>
      내용:{" "}
      <S.Input
        type="text"
        id="contents"
        onChange={props.onChangeInputs}
      ></S.Input>
      {/* 이미지 파일 */}
      <S.WrapFile>
        <S.LikeButton onClick={props.onClickImage} />
        파일:{" "}
        <S.Image
          type="file"
          ref={props.fileRef}
          onChange={props.onChangeFile}
          accept="image/png"
        />
        {props.imageUrl && (
          <S.SeeImage src={`http://storage.googleapis.com/${props.imageUrl}`} />
        )}
      </S.WrapFile>
      . 작성자: <div>{props.data.writer}</div>
      제목: <div>{props.data.title}</div>
      내용: <div>{props.data.contents}</div>
      <S.CallButton onClick={props.onClickButton}>버튼입력</S.CallButton>
    </S.Wrapper>
  );
}
