import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { checkFileValidation } from "../../../src/commons/libraries/fileValidation";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput! ){
    createBoard(createBoardInput: $createBoardInput){
      _id
    }
  }

`

export default function ImageUploadEX() {
  const fileRef = useRef<HTMLInputElement>(null);

  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);

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
      console.log(result.data.uploadFile.url);

      setImageUrl(result.data.uploadFile.url);
    } catch (error) {
      alert("경고");
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <div>
      <h1>이미지 업로드</h1>
      <button
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "gray",
          fontSize: "14px",
        }}
        onClick={onClickImage}
      >
        이미지 업로드
      </button>
      <input
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
        style={{ display: "none" }}
      />
      <img src={`http://storage.googleapis.com/${imageUrl}`} />
    </div>
  );
}
