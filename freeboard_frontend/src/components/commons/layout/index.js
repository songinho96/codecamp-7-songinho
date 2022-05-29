import styled from "@emotion/styled";
// import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import LayoutSideBar from "./sidebar";

const LayoutBodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LayoutBody = styled.div``;

export default function Layout(props) {
  // const router = useRouter();

  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <LayoutBodyWrapper>
        <LayoutBody>
          <LayoutSideBar />
          {props.children}
        </LayoutBody>
      </LayoutBodyWrapper>
      <LayoutFooter />
    </>
  );
}
