import { gql, useMutation } from "@apollo/client";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
export default function EditorWriterPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br><p>" ? "" : value);

    trigger("contents");
  };

  const onClickSubmit = async (data) => {
    if (!data.writer || !data.password || !data.title || !data.contents) {
      alert("모두 입력해 주세요.");
      return;
    }
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`/quiz06/editor/detail/${result.data.createBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자:
      <input type="text" {...register("writer")} />
      비밀번호:
      <input type="password" {...register("password")} />
      제목:
      <input type="text" {...register("title")} />
      <br />
      내용:
      <ReactQuill onChange={onChangeContents} />
      <button>등록하기</button>
    </form>
  );
}
