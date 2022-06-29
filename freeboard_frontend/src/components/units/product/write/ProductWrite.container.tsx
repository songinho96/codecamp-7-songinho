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

const schema = yup.object({
  name: yup.string().required("상품명은 필수 입력 사항입니다."),
  contents: yup.string().required("상품설명은 필수 입력 사항입니다."),
  price: yup.number().required("가격은 필수 입력 사항입니다."),
});

export default function ProductWriteContainer(props) {
  // kakao
  const [getLat, setGetLat] = useState();
  const [getLng, setGetLng] = useState();
  const [addressClick, setAddressClick] = useState("");

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
    const htmlData = editorRef.current?.getInstance().getHTML();
    // console.log(htmlData);

    // register로 등록하지 않고, 강제로 값을 넣어주는 기능!!
    setValue("contents", htmlData);

    // onChange 됐다고 react-hook-form에 알려주는 기능!!
    trigger("contents");
  };

  // 수정 컨텐츠 html 로 바꿔주기
  useEffect(() => {
    const htmlString = props?.productData?.fetchUseditem.contents;
    editorRef.current?.getInstance().setHTML(htmlString);

    setValue("contents", htmlString);

    trigger("contents");
  }, []);

  const onClickSubmit = async (data) => {
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
              address: addressClick,
              lat: getLat,
              lng: getLng,
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
    } catch (error) {
      // console.log(error);
      Modal.error({
        title: "Error 메시지",
        content: error.message,
      });
    }
  };

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
    if (addressClick) useditemAddress.address = addressClick;
    if (getLat) useditemAddress.lat = getLat;
    if (getLng) useditemAddress.lng = getLng;
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
    } catch (error) {
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

  useEffect(() => {
    if (props.productData?.fetchUseditem.useditemAddress?.address.length) {
      setAddressClick(
        props.productData?.fetchUseditem.useditemAddress?.address
      );
    }
  }, [props.productData]);

  // 태그

  const [tags, setTags] = useState([""]);

  useEffect(() => {
    if (props.productData?.fetchUseditem.tags?.length) {
      setTags([...props.productData?.fetchUseditem.tags]);
    }
  }, [props.productData]);

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
      setGetLat={setGetLat}
      getLat={getLat}
      setGetLng={setGetLng}
      getLng={getLng}
      setAddressClick={setAddressClick}
      addressClick={addressClick}
      // 태그
      tags={tags}
      setTags={setTags}
    />
  );
}
