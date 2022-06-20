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
const HIDDEN_BANNER = [""];
const HIDDEN_NAVIGATION = ["/"];
const HIDDEN_SIDEBAR = ["/"];
const HIDDEN_FOOTER = ["/"];
const HIDDEN_MYPAGE_SIDEBAR = ["products", "/boards"];

export default function Layout(props: any) {
  const router = useRouter();

  // const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);
  const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);
  const isHideenMypageSidebar = HIDDEN_MYPAGE_SIDEBAR.includes(router.asPath);

  return (
    <>
      <Header />
      {!isHiddenBanner && <Banner />}
      {!isHiddenNavigation && <Navigation />}
      {/* {!isHiddenSidebar && <SideBar />} */}
      {/* <LayoutBodyWrapper> */}
      {/* {!isHideenMypageSidebar && <MypageSidebar />} */}
      <div>{props.children}</div>
      {/* </LayoutBodyWrapper> */}
      {!isHiddenFooter && <Footer />}
    </>
  );
}
