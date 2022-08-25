import React, { useEffect, useRef, useState } from "react";
import ProductWritePresenter from "./ProductWrite.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./ProductWrite.queries";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { Editor } from "@toast-ui/react-editor";
import { IProductWriteContainerProps } from "./ProductWrite.types";

const schema = yup.object({
  name: yup.string().required("상품명은 필수 입력 사항입니다."),
  remarks: yup.string().required("상품요약은 필수 입력 사항입니다."),
  contents: yup.string().required("상품설명은 필수 입력 사항입니다."),
  price: yup.number().required("가격은 필수 입력 사항입니다."),
});

export default function ProductWriteContainer(
  props: IProductWriteContainerProps
) {
  // kakao
  // const [getLat, setGetLat] = useState();
  // const [getLng, setGetLng] = useState();
  // const [addressClick, setAddressClick] = useState("");

  const router = useRouter();
  const [fileUrls, setFileUrls] = useState(["", "", "", "", "", ""]);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const editorRef = useRef<Editor>(null);
  const onChangeContents = (value: string) => {
    // console.log(value);
    // const data = editorRef.current?.getInstance().getMarkdown(); // 마크다운 언어
    const htmlData = editorRef.current?.getInstance()?.getHTML();
    // console.log(htmlData);

    // register로 등록하지 않고, 강제로 값을 넣어주는 기능!!
    setValue("contents", htmlData);

    // onChange 됐다고 react-hook-form에 알려주는 기능!!
    trigger("contents");
  };

  const onClickSubmit = async (data: any) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags,
            images: fileUrls,
            useditemAddress: {
              addressDetail: data.addressDetail,
              address,
              // lat: getLat,
              // lng: getLng,
            },
          },
        },
      });
      console.log(result);
      Modal.success({
        title: "등록 성공!",
        content: "상품이 등록되었습니다!",
      });
      router.push(`/products/${result.data.createUseditem._id}`);
    } catch (error: any) {
      // console.log(error);
      Modal.error({
        title: "Error 메시지",
        content: error.message,
      });
    }
  };

  // 수정 컨텐츠 html 로 바꿔주기
  useEffect(() => {
    const htmlString = props?.productData?.fetchUseditem.contents;
    editorRef.current?.getInstance().setHTML(htmlString);

    setValue("contents", htmlString);

    trigger("contents");
  }, [props?.productData]);

  const onClickUpdate = async (data: any) => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.productData.fetchUseditem.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    const updateUseditemInput: any = {};
    if (data?.name) updateUseditemInput.name = data.name;
    if (data?.remarks) updateUseditemInput.remarks = data.remarks;
    if (data?.price) updateUseditemInput.price = data.price;
    if (data?.contents) updateUseditemInput.contents = data.contents;
    if (isChangedFiles) updateUseditemInput.images = data.images;

    const useditemAddress: any = {};
    if (data?.addressDetail) useditemAddress.addressDetail = data.addressDetail;
    // if (addressClick) useditemAddress.address = address;
    // if (getLat) useditemAddress.lat = getLat;
    // if (getLng) useditemAddress.lng = getLng;
    try {
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.boardId,
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags,
            images: fileUrls,
            useditemAddress,
          },
        },
      });
      Modal.success({
        title: "상품 수정 성공!!",
        content: "상품이 수정 되었습니다.",
      });
      router.push(`/products/${result.data.updateUseditem._id}`);
    } catch (error: any) {
      Modal.error({
        title: "Error 메시지",
        content: error.message,
      });
    }
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    if (props.productData?.fetchUseditem.images?.length) {
      setFileUrls([...props.productData?.fetchUseditem.images]);
    }
  }, [props.productData]);

  // useEffect(() => {
  //   if (props.productData?.fetchUseditem.useditemAddress?.address?.length) {
  //     setAddressClick(
  //       props.productData?.fetchUseditem.useditemAddress?.address
  //     );
  //   }
  // }, [props.productData]);

  // 태그

  const [tags, setTags] = useState([""]);

  useEffect(() => {
    if (props.productData?.fetchUseditem.tags?.length) {
      setTags([...props.productData?.fetchUseditem.tags]);
    }
  }, [props.productData]);

  // 다음 포스트
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");

  const showModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    // console.log(data);
    setIsModalVisible((prev) => !prev); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  // 현재위치

  // const onClickCurrent = () => {
  //   let lat, lng;
  //   if (navigator.geolocation) {
  //     // GPS를 지원하면
  //     navigator.geolocation.getCurrentPosition(
  //       function (position) {
  //         lat = position.coords.latitude;
  //         lng = position.coords.longitude;
  //         console.log("위도 : " + lat + " 경도 : " + lng);
  //         setGetLat(lat);
  //         setGetLng(lng);
  //       },

  //       function (error) {
  //         console.error(error);
  //       },
  //       {
  //         enableHighAccuracy: false,
  //         maximumAge: 0,
  //         timeout: Infinity,
  //       }
  //     );
  //   } else {
  //     alert("GPS를 지원하지 않습니다");
  //     return;
  //   }
  // };

  // console.log(getLat);
  // console.log(getLng);

  return (
    <ProductWritePresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      onChangeContents={onChangeContents}
      editorRef={editorRef}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      productData={props.productData}
      // kakaomap

      // setAddressClick={setAddressClick}

      // 태그
      tags={tags}
      setTags={setTags}
      // 다음 포스트
      isModalVisible={isModalVisible}
      zipcode={zipcode}
      address={address}
      showModal={showModal}
      handleComplete={handleComplete}
      // 현재 위치
      // onClickCurrent={onClickCurrent}
      setAddress={setAddress}
    />
  );
}
