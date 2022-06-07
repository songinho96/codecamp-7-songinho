import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const fileRef = useRef<HTMLInputElement>(null); // 태그를 변수에 넣는다.

  const [imageUrl, setImageUrl] = useState<string>("");
  const [uploadFile] = useMutation(UPLOAD_FILE);

  // 이벤트 핸들러 함수
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    try {
      // 1. uploadFile API 요청하기(요청 결과 URL 받아오기)
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      console.log(result.data.uploadFile.url);
      console.log(1, result);

      // 2. 요청 결과 URL을 state에 저장하기
      setImageUrl(result.data.uploadFile.url);
    } catch (error) {
      Modal.error({ content: "에러발생!!" });
    }
  };

  const onClickImage = () => {
    fileRef.current?.click(); // 현재 파일태그를 클릭해주세요. 파일태그가 있을 때 클릭 해줘
  };
  return (
    <div>
      <h1>이미지 업로드 연습하기</h1>
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "gray",
          fontSize: "14px",
        }}
        onClick={onClickImage}
      >
        이미지업로드
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        ref={fileRef}
        onChange={onChangeFile}
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </div>
  );
}
