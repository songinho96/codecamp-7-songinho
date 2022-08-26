import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "my-font";
  }

  @font-face {
    font-family: my-font;
    src: url("/font/Jua-Regular.ttf");
  }
`;
