import React from "react";
import InputBasic from "../../../commons/inputs/basic";
import * as S from "./ProductWrite.styles";

export default function ProductWritePresenter(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <S.Wrapper>
        <S.Title>상품 등록하기</S.Title>
        <S.Wrap>
          <S.WrapProduct>
            <S.Label>상품명</S.Label>
            <InputBasic type="text" register={props.register("name")} />
            <S.Error>{props.formState.errors.name?.message}</S.Error>
          </S.WrapProduct>
          <S.WrapProduct>
            <S.Label>한줄 요약</S.Label>
            <InputBasic type="text" register={props.register("remarks")} />
            <S.Error>{props.formState.errors.remarks?.message}</S.Error>
          </S.WrapProduct>
          <S.WrapDetail>
            <S.Label>상품설명</S.Label>
            <S.InputDetail {...props.register("contents")} />
            <S.Error>{props.formState.errors.contents?.message}</S.Error>
          </S.WrapDetail>
          <S.WrapProduct>
            <S.Label>판매 가격</S.Label>
            <InputBasic type="text" register={props.register("price")} />
            <S.Error>{props.formState.errors.price?.message}</S.Error>
          </S.WrapProduct>
          <S.WrapProduct>
            <S.Label>태그 입력</S.Label>
            <InputBasic type="text" register={props.register("tags")} />
          </S.WrapProduct>
          <S.WrapperLocation>
            <S.WrapMap>
              <S.Label>거래 위치</S.Label>
              <S.Map>Map</S.Map>
            </S.WrapMap>
            <S.WrapperGpsLocation>
              <S.WrapGps>
                <S.Label>GPS</S.Label>
                <S.WrapCoordinate>
                  <S.Latitude />
                  <S.Longitude />
                </S.WrapCoordinate>
              </S.WrapGps>
              <S.WrapAddress>
                <S.Label>주소</S.Label>
                <S.Address />
                <S.Address />
              </S.WrapAddress>
            </S.WrapperGpsLocation>
          </S.WrapperLocation>
          <S.WrapperImage>
            <S.Label>사진 첨부</S.Label>
            <S.WrapImage>
              <S.Image1>Image1</S.Image1>
              <S.Image1>Image2</S.Image1>
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
            <S.SubmitButton isActive={props.formState.isValid}>
              SubmitButton
            </S.SubmitButton>
          </S.WrapButton>
        </S.Wrap>
      </S.Wrapper>
    </form>
  );
}
