import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
// import { useRef } from "react";

export default function Writer() {
  // const editorRef = useRef()

  // const editor = editorRef.current.getInstance()/
  return (
    <>
      <Editor
        previewStyle="vertical"
        height="400px"
        initialEditType="markdown"
        initialValue="hello"
        // ref={editorRef}
      />
    </>
  );
}
