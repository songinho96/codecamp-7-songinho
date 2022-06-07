import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import React, { ChangeEvent, useRef, useState } from "react";
import { checkFileValidation } from "../../../src/commons/libraries/fileValidation";
import ImageUploadPageUI from "./imageUpload.presenter";
import { CREATE_BOARD, UPLOAD_FILE } from "./imageUpload.quires";

export default function ImageUploadPage() {
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const fileRef = useRef<HTMLInputElement>(null);

  const [imageUrl, setImageUrl] = useState("");

  const [data, setData] = useState({});
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickButton = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          ...inputs,
          images: [imageUrl],
        },
      },
    });
    setData(result.data.createBoard);
    console.log(result);
  };

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    const isValid = checkFileValidation(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      setImageUrl(result.data.uploadFile.url);
    } catch (error) {
      Modal.error({ content: "에러발생!!" });
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
    console.log(123213);
  };

  return (
    <ImageUploadPageUI
      onClickButton={onClickButton}
      onChangeInputs={onChangeInputs}
      onChangeFile={onChangeFile}
      onClickImage={onClickImage}
      data={data}
      fileRef={fileRef}
      imageUrl={imageUrl}
    />
  );
}
