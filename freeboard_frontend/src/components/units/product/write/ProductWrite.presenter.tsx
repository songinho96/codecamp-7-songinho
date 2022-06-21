import React from "react";
import InputBasic from "../../../commons/inputs/basic";
import UploadBasicContainer from "../../../commons/uploads/basic/UploadBasic.container";
import * as S from "./ProductWrite.styles";
import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";
import KakaoMapPage from "../../../commons/maps/kakao";

const ToastUi = dynamic(() => import("../../../commons/toastUi"), {
  ssr: false,
});

export default function ProductWritePresenter(props) {
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
            {/* <S.InputDetail {...props.register("contents")} /> */}
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
            <InputBasic type="text" register={props.register("tags")} />
          </S.WrapProduct>
          <S.WrapperLocation>
            <S.WrapMap>
              <S.Label>거래 위치</S.Label>
              <S.Map>
                <KakaoMapPage
                  setGetLat={props.setGetLat}
                  setGetLng={props.setGetLng}
                  setAddressClick={props.setAddressClick}
                  addressClick={props.addressClick}
                />
              </S.Map>
            </S.WrapMap>
            <S.WrapperGpsLocation>
              <S.WrapGps>
                <S.Label>GPS</S.Label>
                <S.WrapCoordinate>
                  <S.Latitude defaultValue={props.getLat} />
                  <S.Longitude defaultValue={props.getLng} />
                </S.WrapCoordinate>
              </S.WrapGps>
              <S.WrapAddress>
                <S.Label>주소</S.Label>
                <S.Address defaultValue={props.addressClick} />
                <S.Address {...props.register("addressDetail")} />
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
          <S.WrapperRadioButton>
            <S.Label>메인 사진 설정</S.Label>
            <S.WrapperRadio>
              <S.WrapRadio>
                <S.Radio>Radio</S.Radio>
                <S.RadioLabel>RadioLabel</S.RadioLabel>
              </S.WrapRadio>
              <S.WrapRadio>
                <S.Radio>Radio</S.Radio>
                <S.RadioLabel>RadioLabel</S.RadioLabel>
              </S.WrapRadio>
            </S.WrapperRadio>
          </S.WrapperRadioButton>
          <S.WrapButton>
            <S.SubmitButton>
              {props.isEdit ? "UpdateButton" : "SubmitButton"}
            </S.SubmitButton>
          </S.WrapButton>
        </S.Wrap>
      </S.Wrapper>
    </form>
  );
}
