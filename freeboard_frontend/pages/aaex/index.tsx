import React, { useRef, useState } from "react";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { gql, useMutation } from "@apollo/client";
import { checkFileValidation } from "../../src/commons/libraries/fileValidation";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function App() {
  const fileRef = useRef<HTMLInputElement>(null); // 태그를 변수에 넣는다.

  const [imageUrl, setImageUrl] = useState<string>("");
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );

    const result = await createBoard({
      variables: {
        createBoardInput: {
          images: [imageUrl],
        },
      },
    });
    console.log(result);
  };

  const onChangeFile = async ({ fileList: newFileList }, event: any) => {
    setFileList(newFileList);
    const fileImage = event.target.files?.[0];
    console.log(fileImage);

    const isValid = checkFileValidation(fileImage);
    if (!isValid) return;

    try {
      // 1. uploadFile API 요청하기(요청 결과 URL 받아오기)
      const result = await uploadFile({
        variables: {
          file: fileImage,
        },
      });
      console.log(result.data.uploadFile.url);
      console.log(1, result);

      // 2. 요청 결과 URL을 state에 저장하기
      setImageUrl(result.data.uploadFile.url);
    } catch (error: any) {
      Modal.error({ content: "에러발생!!" });
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={onChangeFile}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
}
