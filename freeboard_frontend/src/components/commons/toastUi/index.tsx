import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

export default function ToastUi(props: any) {
  // useRef

  return (
    <>
      <Editor
        onChange={props.onChangeContents}
        previewStyle="vertical"
        height="400px"
        initialEditType="markdown"
        useCommandShortcut={true}
        ref={props.editorRef}
        plugins={[
          [
            colorSyntax,
            // 기본 색상 preset 적용
            {
              preset: ["#1F2E3D", "#4c5864", "#ED7675"],
            },
          ],
        ]}
        initialValue={props.initialValue}
      />
    </>
  );
}
