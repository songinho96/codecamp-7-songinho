import { useEffect } from "react";

import React from "react";

export default function useToastHtml() {
  useEffect(() => {
    const htmlString = props?.productData?.fetchUseditem.contents;
    editorRef.current?.getInstance().setHTML(htmlString);

    setValue("contents", htmlString);

    trigger("contents");
  }, [props?.productData]);
}
