import { useMutation } from "@apollo/client";
import * as S from "./write.styles";

import React, { useRef, useState } from "react";
import { CREATE_BOARD, UPLOAD_FILE } from "./write.quries";

export default function ImageWriteContainer() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imageUrl, setImageUrl] = useState("");
  // const [data, setData] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = async (event: any) => {
    const file = event.target.files[0];

    try {
      const result = await uploadFile({
        variables: { file },
      });
      console.log(result);
      setImageUrl(result.data.uploadFile.url);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onChangeTitle = (event: any) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };

  const onClickCreate = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: "철수",
            password: "123",
            images: [imageUrl],
            title,
            contents,
          },
        },
      });
      console.log(result);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <>
      <S.Title type="text" onChange={onChangeTitle} />
      <S.Contents type="text" onChange={onChangeContents} />
      <S.UploadFileHidden type="file" onChange={onChangeFile} ref={fileRef} />
      <img src={`http://storage.googleapis.com/${imageUrl}`} />
      <S.UploadButton onClick={onClickImage}>
        이미지업로드뮤테이션
      </S.UploadButton>
      <S.CreateButton onClick={onClickCreate}>CreateBoard</S.CreateButton>
    </>
  );
}
