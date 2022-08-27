import React from "react";
import InputBasic from "../../../commons/inputs/basic";
import UploadBasicContainer from "../../../commons/uploads/basic/UploadBasic.container";
import * as S from "./ProductWrite.styles";
import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";
import Tags from "../../../commons/tags";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import KakaoMapPage2 from "../../../commons/maps/kakao2";
import { IProductWritePresenterProps } from "./ProductWrite.types";

const ToastUi = dynamic(() => import("../../../commons/toastUi"), {
  ssr: false,
});

export default function ProductWritePresenter(
  props: IProductWritePresenterProps
) {
  return (
    // <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
    <form
      onSubmit={
        props.isEdit
          ? props.handleSubmit(props.onClickUpdate)
          : props.handleSubmit(props.onClickSubmit)
      }
    >
      <S.Wrapper>
        <S.Title>{props.isEdit ? "상품 수정하기" : "상품 등록하기"} </S.Title>
        <S.Wrap>
          <S.WrapProduct>
            <S.Label>상품명</S.Label>
            <InputBasic
              type="text"
              register={props.register("name")}
              defaultValue={props.productData?.fetchUseditem.name}
            />
            <S.Error>{props.formState.errors.name?.message}</S.Error>
          </S.WrapProduct>
          <S.WrapProduct>
            <S.Label>한줄 요약</S.Label>
            <InputBasic
              type="text"
              register={props.register("remarks")}
              defaultValue={props.productData?.fetchUseditem.remarks}
            />
            <S.Error>{props.formState.errors.remarks?.message}</S.Error>
          </S.WrapProduct>
          <S.WrapDetail>
            <S.Label>상품설명</S.Label>
            <ToastUi
              onChangeContents={props.onChangeContents}
              editorRef={props.editorRef}
              initialValue={props.productData?.fetchUseditem.contents}
            />
            <S.Error>{props.formState.errors.contents?.message}</S.Error>
          </S.WrapDetail>
          <S.WrapProduct>
            <S.Label>판매 가격</S.Label>
            <InputBasic
              type="text"
              register={props.register("price")}
              defaultValue={props.productData?.fetchUseditem.price}
            />
            <S.Error>{props.formState.errors.price?.message}</S.Error>
          </S.WrapProduct>
          <S.WrapProduct>
            <S.Label>태그 입력</S.Label>
            <S.WrapTags>
              <Tags tags={props.tags} setTags={props.setTags} />
            </S.WrapTags>
          </S.WrapProduct>
          <S.WrapperLocation>
            <S.WrapMap>
              <S.Label>거래 위치</S.Label>

              <KakaoMapPage2
                address={
                  props.address ||
                  props.productData?.fetchUseditem.useditemAddress?.address
                }
              />

              {props.isModalVisible && (
                <Modal
                  visible={true}
                  onOk={props.showModal}
                  onCancel={props.showModal}
                  // onOk={props.handleOk}
                  // onCancel={props.handleCancel}
                >
                  <DaumPostcode onComplete={props.handleComplete} />
                </Modal>
              )}
            </S.WrapMap>
            <S.WrapperGpsLocation>
              <S.WrapAddress>
                <S.WrapSearch>
                  <S.SearchButton onClick={props.showModal}>
                    주소 검색
                  </S.SearchButton>
                  {/* <S.SearchButton onClick={props.onClickCurrent}>
                    현 주소로
                  </S.SearchButton> */}
                </S.WrapSearch>
                <S.Label>주소</S.Label>
                {/* <S.Address readOnly defaultValue={props.addressClick} /> */}
                <S.Address
                  readOnly
                  value={
                    props.address ||
                    props.productData?.fetchUseditem.useditemAddress?.address
                  }
                />
                <S.Label>상세 주소</S.Label>
                <S.Address
                  {...props.register("addressDetail")}
                  defaultValue={
                    props.productData?.fetchUseditem.useditemAddress
                      ?.addressDetail
                  }
                />
              </S.WrapAddress>
            </S.WrapperGpsLocation>
          </S.WrapperLocation>
          <S.WrapperImage>
            <S.Label>사진 첨부</S.Label>
            <S.WrapImage>
              {props.fileUrls.map((el, index) => (
                <UploadBasicContainer
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))}
            </S.WrapImage>
          </S.WrapperImage>
          <S.WrapButton>
            <S.SubmitButton>
              {props.isEdit ? "수정하기" : "등록하기"}
            </S.SubmitButton>
          </S.WrapButton>
        </S.Wrap>
      </S.Wrapper>
    </form>
  );
}
