import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "my-font";
    border-radius: 10px;
  }

  @font-face {
    font-family: my-font;
    src: url("/font/NanumPenScript-Regular.ttf");
  }
`;
