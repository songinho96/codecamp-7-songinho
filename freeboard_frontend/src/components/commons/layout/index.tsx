import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Banner from "./banner";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";
import SideBar from "./sidebar";
import MypageSidebar from "./sidebar/mypage";

const LayoutBodyWrapper = styled.div`
  display: flex;
`;

// const LayoutBody = styled.div``;

// const HIDDEN_HEADERS = ["/"];
const HIDDEN_NAVIGATION = ["/"];
const HIDDEN_SIDEBAR = ["/", "/login", "/signup"];
const HIDDEN_FOOTER = ["/", "/products"];
const HIDDEN_MYPAGE_SIDEBAR = ["products", "/boards"];

export default function Layout(props: any) {
  const router = useRouter();

  // const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);
  const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);
  const isHideenMypageSidebar = HIDDEN_MYPAGE_SIDEBAR.includes(router.asPath);

  return (
    <>
      <Header />
      {!isHiddenNavigation && <Navigation />}
      {/* {!isHiddenSidebar && <SideBar />} */}
      {/* <LayoutBodyWrapper> */}
      {/* {!isHideenMypageSidebar && <MypageSidebar />} */}
      {/* <div style={{ width: "1000px", margin: "auto" }}>{props.children}</div> */}
      <div>{props.children}</div>
      {!isHiddenSidebar && <SideBar />}
      {/* </LayoutBodyWrapper> */}
      {!isHiddenFooter && <Footer />}
    </>
  );
}
