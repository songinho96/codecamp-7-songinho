import styled from "@emotion/styled";
// import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import LayoutSideBar from "./sidebar";

const LayoutBodyWrapper = styled.div`
  display: flex;
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
        <LayoutSideBar />
        <LayoutBody>{props.children}</LayoutBody>
      </LayoutBodyWrapper>
      <LayoutFooter />
    </>
  );
}
