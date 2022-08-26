import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import React, { ChangeEvent, useRef } from "react";
import { checkFileValidation } from "../../../../commons/libraries/fileValidation";
import UploadBasicPresenter from "./UploadBasic.presenter";
import { UPLOAD_FILE } from "./UploadBasic.queries";
import { IUploadBasicContainerProps } from "./UploadBasic.types";

export default function UploadBasicContainer(
  props: IUploadBasicContainerProps
) {
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // console.log(file);

    const isValid = checkFileValidation(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error: any) {
      Modal.error({ content: "에러발생!!" });
    }
  };
  return (
    <UploadBasicPresenter
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      onClickImage={onClickImage}
      onChangeFile={onChangeFile}
    />
  );
}
