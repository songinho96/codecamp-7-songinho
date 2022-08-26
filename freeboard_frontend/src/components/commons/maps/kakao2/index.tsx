// import Head from "next/head";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { breakPoints } from "../../../../commons/styles/media";

declare const window: typeof globalThis & {
  kakao: any;
};

const Wrapper = styled.div`
  width: 384px;
  height: 300px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export default function KakaoMapPage2(props: any) {
  // const [address, setAddress] = useState("");
  // const [addressClick, setAddressClick] = useState("");
  // const [loadAddress, setLoadAddress] = useState("");
  // const [getLat, setGetLat] = useState();
  // const [getLng, setGetLng] = useState();

  // const onChangeAddress = (event) => {
  //   setAddress(event.target.value);
  // };

  // const onClickAddress = () => {
  //   props.setAddress(address);
  // };

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

        // // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
        // if (navigator.geolocation) {
        //   // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        //   navigator.geolocation.getCurrentPosition(function (position) {
        //     const lat = position.coords.latitude; // 위도
        //     const lng = position.coords.longitude; // 경도

        //     getAddr(lat, lng);
        //     function getAddr(lat: any, lng: any) {
        //       const geocoder = new window.kakao.maps.services.Geocoder();

        //       const coords = new window.kakao.maps.LatLng(lat, lng);
        //       const callback = function (result: any, status: any) {
        //         if (status === window.kakao.maps.services.Status.OK) {
        //           props.setAddress(result[0].address.address_name);
        //           console.log(result);
        //         }
        //       };
        //       geocoder.coord2Address(
        //         coords.getLng(),
        //         coords.getLat(),
        //         callback
        //       );
        //     }
        //   });
        // } else {
        //   // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

        //   const locPosition = new window.kakao.maps.LatLng(
        //     33.450701,
        //     126.570667
        //   );
        //   const message = "geolocation을 사용할수 없어요..";

        //   displayMarker(locPosition, message);
        // }

        // // 지도에 마커와 인포윈도우를 표시하는 함수입니다
        // function displayMarker(locPosition, message) {
        //   // 마커를 생성합니다
        //   const marker = new window.kakao.maps.Marker({
        //     map,
        //     position: locPosition,
        //   });

        //   const iwContent = message; // 인포윈도우에 표시할 내용
        //   const iwRemoveable = true;

        //   // 인포윈도우를 생성합니다
        //   const infowindow = new window.kakao.maps.InfoWindow({
        //     content: iwContent,
        //     removable: iwRemoveable,
        //   });

        //   // 인포윈도우를 마커위에 표시합니다
        //   infowindow.open(map, marker);

        //   // 지도 중심좌표를 접속위치로 변경합니다
        //   map.setCenter(locPosition);
        // }

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          props.address ||
            props.productData?.fetchUseditem.useditemAddress?.address,
          function (result: any, status: any) {
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

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="width:200px;text-align:center;padding:6px;color:#FF602A;font-size:12px">${
                  props.address ||
                  props.productData?.fetchUseditem.useditemAddress?.address ||
                  "주소를 검색해주세요"
                }</div>`,
              });
              infowindow.open(map, marker);
              map.setCenter(coords);
            }

            // const lat = props.getLat;
            // const lng = props.getLng;

            // getAddr(lat, lng);
            // function getAddr(lat: any, lng: any) {
            //   const geocoder = new window.kakao.maps.services.Geocoder();

            //   const coords = new window.kakao.maps.LatLng(lat, lng);
            //   const callback = function (result: any, status: any) {
            //     if (status === window.kakao.maps.services.Status.OK) {
            //       props.setAddress(result[0].address.address_name);
            //       console.log(result);
            //     }
            //   };
            //   geocoder.coord2Address(
            //     coords.getLng(),
            //     coords.getLat(),
            //     callback
            //   );
            // }

            // 지도에 클릭 이벤트를 등록합니다

            // // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
            // window.kakao.maps.event.addListener(
            //   map,
            //   "click",
            //   function (mouseEvent) {
            //     // 클릭한 위도, 경도 정보를 가져옵니다
            //     const latlng = mouseEvent.latLng;

            //     console.log(
            //       "클릭한 위치의 위도는 " +
            //         latlng.getLat() +
            //         " 이고, 경도는 " +
            //         latlng.getLng() +
            //         " 입니다"
            //     );
            //     const lat = latlng.getLat();
            //     const lng = latlng.getLng();

            //     getAddr(lat, lng);
            //     function getAddr(lat: any, lng: any) {
            //       const geocoder = new window.kakao.maps.services.Geocoder();

            //       const coords = new window.kakao.maps.LatLng(lat, lng);
            //       const callback = function (result: any, status: any) {
            //         if (status === window.kakao.maps.services.Status.OK) {
            //           props.setAddress(result[0].address.address_name);
            //           console.log(result);
            //           // 마커를 클릭한 위치에 표시합니다
            //           marker.setPosition(mouseEvent.latLng);
            //           marker.setMap(map);
            //         }
            //       };
            //       geocoder.coord2Address(
            //         coords.getLng(),
            //         coords.getLat(),
            //         callback
            //       );
            //     }
            //   }
            // );
          }
        );

        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        const mapTypeControl = new window.kakao.maps.MapTypeControl();

        // 지도 타입 컨트롤을 지도에 표시합니다
        map.addControl(
          mapTypeControl,
          window.kakao.maps.ControlPosition.TOPRIGHT
        );
      });
    };
  }, [
    props.address ||
      props.productData?.fetchUseditem.useditemAddress?.address ||
      props.getLng,
  ]);

  // useEffect(() => {
  //   const script = document.createElement("script"); // <script></script> 태그 만들기
  //   script.src =
  //     "//dapi.kakao.com/v2/maps/sdk.js?appkey=5146441fa20a4db96dbfcb5606df8b38&autoload=false&libraries=services,clusterer,drawing";
  //   document.head.appendChild(script);

  //   script.onload = () => {
  //     // 그때 실행시켜줘
  //     window.kakao.maps.load(function () {
  //       // 카카오가 load 되면 function 실행해줘

  //       const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
  //       const options = {
  //         // 지도를 생성할 때 필요한 기본 옵션
  //         center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
  //         level: 3, // 지도의 레벨(확대, 축소 정도)
  //       };

  //       const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

  //       // 현재 위치
  //       // HTML5의 geolocation으로 사용할 수 있는지 확인합니다

  //       const locPosition = new window.kakao.maps.LatLng(
  //         props.getLat,
  //         props.getLng
  //       ); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다

  //       // 마커와 인포윈도우를 표시합니다
  //       displayMarker(locPosition);

  //       function displayMarker(locPosition: any) {
  //         // 마커를 생성합니다
  //         const marker = new window.kakao.maps.Marker({
  //           map,
  //           position: locPosition,
  //         });

  //         const iwRemoveable = true;

  //         // 인포윈도우를 생성합니다
  //         const infowindow = new window.kakao.maps.InfoWindow({
  //           removable: iwRemoveable,
  //         });

  //         // 인포윈도우를 마커위에 표시합니다
  //         infowindow.open(map, marker);

  //         // 지도 중심좌표를 접속위치로 변경합니다
  //         map.setCenter(locPosition);
  //       }
  //       const lat = props.getLat;
  //       const lng = props.getLng;

  //       getAddr(lat, lng);
  //       function getAddr(lat, lng) {
  //         const geocoder = new window.kakao.maps.services.Geocoder();

  //         const coord = new window.kakao.maps.LatLng(lat, lng);
  //         const callback = function (result, status) {
  //           if (status === window.kakao.maps.services.Status.OK) {
  //             props.setAddress(result[0].address.address_name);
  //           }
  //         };
  //         geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  //       }
  //     });
  //   };
  // }, [props.getLng]);

  return (
    <div>
      {/* <Input placeholder="주소를 적어주세요" onChange={onChangeAddress} />
      <Button type="button" onClick={onClickAddress}>
        주소 검색
      </Button> */}
      {/* <div onClick={onClickCurrent}>현재위치 로</div> */}
      <Wrapper id="map"></Wrapper>
    </div>
  );
}
