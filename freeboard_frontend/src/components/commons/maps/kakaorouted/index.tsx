// import Head from "next/head";

import styled from "@emotion/styled";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

const Wrapper = styled.div`
  width: 1024px;
  padding-top: 20px;
  padding-right: 30px;
`;

export default function KakaoMapPageRoute(props) {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script> 태그 만들기
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=5146441fa20a4db96dbfcb5606df8b38&autoload=false&libraries=services,clusterer,drawing";
    document.head.appendChild(script);
    script.onload = () => {
      // 그때 실행시켜줘
      window.kakao.maps.load(function () {
        // 카카오가 load 되면 function 실행해줘

        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(props?.lat, props?.lng), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        // 마커가 표시될 위치입니다

        const markerPosition = new window.kakao.maps.LatLng(
          props?.lat,
          props?.lng
        );
        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        const mapTypeControl = new window.kakao.maps.MapTypeControl();

        // 지도 타입 컨트롤을 지도에 표시합니다
        map.addControl(
          mapTypeControl,
          window.kakao.maps.ControlPosition.TOPRIGHT
        );
      });
    };
  }, []);

  return (
    <Wrapper>
      <div id="map" style={{ width: "60%", height: 360 }}></div>
    </Wrapper>
  );
}
