import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

const HIDDEN_HEADERS = ["/12-05-modal-refectoring"];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  const myStyle = {
    display: "flex",
  };

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <div style={myStyle}>
        <div
          style={{ width: "200px", height: "700px", backgroundColor: "yellow" }}
        >
          여기는 사이드바입니다!!
        </div>
        <div>{props.children}</div>
      </div>
      <LayoutFooter />
    </>
  );
}

// import LayoutSidebar from "./sidebar";
// import styled from "@emotion/styled";
// import { ReactChild } from "react";
// import { useRouter } from "next/router";
// import LayoutSidebar from "../../../../pages/00-exer/first";

// interface ILayoutProps {
//   children: ReactChild;
// }

// const LayoutBody = styled.div``;

// export default function Layout(props: ILayoutProps) {
//   const router = useRouter();
//   const HIDDEN_SIDEBAR = ["/market/new"];
//   const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath);
//   return (
//     <>
//       <LayoutBody>
//         {!isHiddenSidebar && <LayoutSidebar />}
//         {props.children}
//       </LayoutBody>
//     </>
//   );
// }
