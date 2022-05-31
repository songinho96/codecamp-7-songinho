import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Banner from "./banner";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";
import SideBar from "./sidebar";

const Back = styled.div`
  /* background-image: url("/images/dog.jpeg"); */
`;

const LayoutBodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LayoutBody = styled.div``;

const HIDDEN_HEADERS = ["/"];
const HIDDEN_BANNER = ["/"];
const HIDDEN_NAVIGATION = ["/"];
const HIDDEN_SIDEBAR = ["/"];
const HIDDEN_FOOTER = ["/"];

export default function Layout(props) {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);
  const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <>
      <Header />
      {!isHiddenBanner && <Banner />}
      {!isHiddenNavigation && <Navigation />}

      {!isHiddenSidebar && <SideBar />}
      <Back>{props.children}</Back>
      {!isHiddenFooter && <Footer />}
    </>
  );
}
