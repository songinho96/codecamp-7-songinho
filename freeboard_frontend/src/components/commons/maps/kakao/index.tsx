// import Head from "next/head";
import { useEffect, useState } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage(props) {
  const [address, setAddress] = useState("");
  // const [addressClick, setAddressClick] = useState("");
  const [loadAddress, setLoadAddress] = useState("");
  // const [getLat, setGetLat] = useState();
  // const [getLng, setGetLng] = useState();

  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const onClickAddress = () => {
    props.setAddressClick(address);
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

        geocoder.addressSearch(props.addressClick, function (result, status) {
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
            // const infowindow = new window.kakao.maps.InfoWindow({
            //   content: `<div style="width:150px;text-align:center;padding:6px 0;">${address}</div>`,
            // });
            // infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }

          function getInfo() {
            // 지도의 현재 중심좌표를 얻어옵니다
            const center = map.getCenter();
            // 지도의 현재 영역을 얻어옵니다
            let message = "지도 중심좌표는 위도 " + center.getLat() + ", <br>";
            message += "경도 " + center.getLng() + " 이고 <br>";
            console.log(message);
            props.setGetLat(center.getLat());
            props.setGetLng(center.getLng());
          }
          getInfo();
        });

        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        const mapTypeControl = new window.kakao.maps.MapTypeControl();

        // 지도 타입 컨트롤을 지도에 표시합니다
        map.addControl(
          mapTypeControl,
          window.kakao.maps.ControlPosition.TOPRIGHT
        );

        // const marker = new window.kakao.maps.Marker(); // 클릭한 위치를 표시할 마커입니다
        // const infowindow = new window.kakao.maps.InfoWindow({ zindex: 1 }); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다

        // // // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
        // // searchAddrFromCoords(map.getCenter(), displayCenterInfo);

        // // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
        // window.kakao.maps.event.addListener(
        //   map,
        //   "click",
        //   function (mouseEvent) {
        //     searchDetailAddrFromCoords(
        //       mouseEvent.latLng,
        //       function (result, status) {
        //         if (status === kakao.maps.services.Status.OK) {
        //           const detailAddr = !!result[0].road_address
        //             ? "<div>도로명주소 : " +
        //               result[0].road_address.address_name +
        //               "</div>"
        //             : "";
        //           detailAddr +=
        //             "<div>지번 주소 : " +
        //             result[0].address.address_name +
        //             "</div>";

        //           const content =
        //             '<div class="bAddr">' +
        //             '<span class="title">법정동 주소정보</span>' +
        //             detailAddr +
        //             "</div>";

        //           // 마커를 클릭한 위치에 표시합니다
        //           marker.setPosition(mouseEvent.latLng);
        //           marker.setMap(map);

        //           // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
        //           infowindow.setContent(content);
        //           infowindow.open(map, marker);
        //           setLoadAddress(detailAddr);
        //         }
        //       }
        //     );
        //   }
        // );

        // // // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
        // // window.kakao.maps.event.addListener(map, "idle", function () {
        // //   searchAddrFromCoords(map.getCenter(), displayCenterInfo);
        // // });

        // function searchAddrFromCoords(coords, callback) {
        //   // 좌표로 행정동 주소 정보를 요청합니다
        //   geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
        // }

        // function searchDetailAddrFromCoords(coords, callback) {
        //   // 좌표로 법정동 상세 주소 정보를 요청합니다
        //   geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        // }

        // // // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
        // // function displayCenterInfo(result, status) {
        // //   if (status === window.kakao.maps.services.Status.OK) {
        // //     const infoDiv = document.getElementById("map");

        // //     for (let i = 0; i < result.length; i++) {
        // //       // 행정동의 region_type 값은 'H' 이므로
        // //       if (result[i].region_type === "H") {
        // //         infoDiv.innerHTML = result[i].address_name;
        // //         break;
        // //       }
        // //     }
        // //   }
        // // }

        // // function getInfo() {
        // //   // 지도의 현재 중심좌표를 얻어옵니다
        // //   const center = map.getCenter();
        // //   const message = "지도 중심좌표는 위도 " + center.getLat() + ", <br>";
        // //   console.log(message);
        // // }
        // // getInfo();

        // //   // 지도의 현재 영역을 얻어옵니다
        // //   const bounds = map.getBounds();

        // //   const message = "지도 중심좌표는 위도 " + center.getLat() + ", <br>";
        // //   message += "경도 " + center.getLng() + " 이고 <br>";
        // //   console.log(message);
        // // }
        // // getInfo();
      });
    };
    console.log(loadAddress);
  }, [props.addressClick]);

  return (
    <div>
      <input onChange={onChangeAddress} />
      <button type="button" onClick={onClickAddress}>
        클릭
      </button>
      <div id="map" style={{ width: 384, height: 252 }}></div>
    </div>
  );
}
