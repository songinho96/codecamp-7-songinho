import styled from "@emotion/styled";
import LayoutBannerQuiz from "./banner";
import LayoutFooterQuiz from "./footer";
import LayoutHeaderQuiz from "./header";
import LayoutNavigationQuiz from "./navigation";
import LayoutSideBarQuiz from "./sidebar";

const WrapperSide = styled.div`
  display: flex;
`;

export default function LayoutQuiz(props) {
  return (
    <>
      <LayoutHeaderQuiz />
      <LayoutBannerQuiz />
      <LayoutNavigationQuiz />
      <WrapperSide>
        <LayoutSideBarQuiz />
        <div
          style={{
            width: "3000px",
            height: "700px",
            backgroundColor: "orange",
          }}
        >
          {props.children}
        </div>
      </WrapperSide>
      <LayoutFooterQuiz />
    </>
  );
}
