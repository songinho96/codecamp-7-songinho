// import Head from "next/head";
import { useEffect, useState } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  const [address, setAddress] = useState("");
  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  };
  const onClickAddress = () => {
    console.log(address);
  };
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
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(address, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const infowindow = new window.kakao.maps.InfoWindow({
              content:
                '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        });
      });
    };
  }, [onClickAddress]);

  return (
    <div>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=5146441fa20a4db96dbfcb5606df8b38"
        ></script>
      </Head> */}
      <input onChange={onChangeAddress} />
      <button onClick={onClickAddress}>클릭</button>
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </div>
  );
}
