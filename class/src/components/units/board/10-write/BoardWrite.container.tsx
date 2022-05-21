import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { IBoardWriteprops, IMyvariables } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteprops) {
  const router = useRouter();

  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [data, setData] = useState({});
  const [callGraphql] = useMutation(CREATE_BOARD);

  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식
    const result = await callGraphql({
      variables: {
        writer: myWriter,
        title: myTitle,
        contents: myContents,
      },
    });
    console.log(result);
    setData(result.data.createBoard);

    router.push(`/09-01-boards/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    const myvariables: IMyvariables = { number: Number(router.query.number) };
    if (myWriter) {
      myvariables.writer = myWriter;
    }
    if (myTitle) {
      myvariables.title = myTitle;
    }
    if (myContents !== "") {
      myvariables.contents = myContents;
    }

    const result = await updateBoard({
      variables: myvariables,
    });
    router.push(`/09-01-boards/${result.data.updateBoard.number}`);
    // router.push(`/08-05-boards/${router.query.number}`) => 이것도 가능!
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMyWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMyTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setMyContents(event.target.value);
  };

  return (
    <BoardWriteUI
      aaa={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickGraphqlApi={onClickGraphqlApi}
      onClickUpdate={onClickUpdate}
      data={data}
      isEdit={props.isEdit}
      boardData={props.boardData}
    />
  );
}
