import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { Modal } from "antd";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
  // useEffect(), useRef()
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // isActive 버튼 색 바꾸기
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();
  const [callGraphql] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  // useState onChagne
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  // useState Error
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  // onChange()
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    // setIsActive
    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }

    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }

    if (writer && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }

    if (writer && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeYoutube = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
    // console.log(setYoutubeUrl);
  };

  // onClickSubmit
  const onClickSubmit = async () => {
    if (writer === "") {
      setWriterError("작성자를 입력해주세요.");
    }

    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }

    if (title === "") {
      setTitleError("제목을 입력해주세요.");
    }

    if (contents === "") {
      setContentsError("내용을 입력해주세요.");
    }

    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      try {
        const result = await callGraphql({
          variables: {
            createBoardInput: {
              writer,
              password,
              contents,
              title,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });
        router.push(`/boards/${result.data.createBoard._id}`);
        console.log(result);
        Modal.success({
          title: "게시글 등록 성공!!",
          content: "게시글이 등록 되었습니다!",
        });
      } catch (error) {
        Modal.error({
          title: "Error 메시지",
          content: "비밀번호를 입력해주세요!",
        });
      }
    }
  };

  const onClickUpdate = async () => {
    if (
      !title &&
      !contents &&
      !youtubeUrl &&
      !address &&
      !addressDetail &&
      !zipcode
    ) {
      Modal.error({
        title: "Error 메시지",
        content: "수정한 내용이 없습니다!",
      });
      return;
    }

    if (!password) {
      Modal.error({
        title: "Error 메시지",
        content: "비밀번호를 입력해주세요!",
      });
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    // 주소 변경
    if (zipcode || address || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    console.log(updateBoardInput.boardAddress);

    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });
      Modal.success({
        title: "게시글 수정 성공!!",
        content: "게시글이 수정 되었습니다!",
      });
      router.push(`/boards/${result.data.updateBoard._id}`);
      // router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      Modal.error({
        title: "Error 메시지",
        content: "비밀번호가 틀렸습니다!",
      });
    }
  };

  // 모달 다음 포스트 어드레스
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const showModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  const handleComplete = (data: any) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    // console.log(data);
    setIsModalVisible((prev) => !prev); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  // 모달
  const [isBackVisible, setIsBackVisible] = useState(false);

  // 돌아가기
  const onClickbackDetail = () => {
    setIsBackVisible(true);
  };

  // 모달 ok 눌렀을 때
  const onClickhandleOk = () => {
    props.isEdit
      ? router.push(`/boards/${router.query.boardId}`)
      : router.push("/boards");
  };

  const onClickbackList = () => {
    setIsBackVisible(true);
  };

  const handleCancel = () => {
    setIsBackVisible(false);
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onClickbackDetail={onClickbackDetail}
      onChangeYoutube={onChangeYoutube}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      isActive={isActive}
      isEdit={props.isEdit}
      boardData={props.boardData}
      isModalVisible={isModalVisible}
      showModal={showModal}
      // handleOk={handleOk}
      // handleCancel={handleCancel}
      handleComplete={handleComplete}
      onChangeAddressDetail={onChangeAddressDetail}
      zipcode={zipcode}
      address={address}
      data={undefined}
      inputRef={inputRef}
      onClickbackList={onClickbackList}
      handleCancel={handleCancel}
      isBackVisible={isBackVisible}
      onClickhandleOk={onClickhandleOk}
    />
  );
}
