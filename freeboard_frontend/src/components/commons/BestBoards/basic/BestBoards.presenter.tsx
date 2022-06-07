import React from "react";
import { getDate } from "../../libraries/utils";
import * as S from "./BestBoards.styles";

export default function BestBoardsPresenter(props) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.BestPost>베스트 게시글</S.BestPost>
        <S.SliderWrapper>
          <S.SliderWrap {...props.settings}>
            {props.data?.fetchBoardsOfTheBest.map((el: any) => (
              <S.WrapperBest key={el._id}>
                <S.WrapBest>
                  <S.BestImage
                    id={el._id}
                    onClick={props.onClickBestImage}
                    src={
                      el.images[0]
                        ? `https://storage.googleapis.com/${el.images[0]}`
                        : "/list/noimage.gif"
                    }
                  />
                  <S.BestTitle>{el.title}</S.BestTitle>
                  <S.WrapBestInfo>
                    <S.WrapperProfileInfo>
                      <S.WrapProfile>
                        <S.ProfileIcon src="/detailBoard/profile-Icon.svg" />
                        <S.ProfileWriter>{el.writer}</S.ProfileWriter>
                      </S.WrapProfile>
                      <S.WrapDate>{getDate(el.createdAt)}</S.WrapDate>
                    </S.WrapperProfileInfo>
                    <S.WrapperThumbs>
                      <S.Thumbsup src="/detailBoard/like-Icon.svg" />
                      <S.TuumbsCount>{el.likeCount}</S.TuumbsCount>
                    </S.WrapperThumbs>
                  </S.WrapBestInfo>
                </S.WrapBest>
              </S.WrapperBest>
            ))}
          </S.SliderWrap>
        </S.SliderWrapper>
      </S.Header>
    </S.Wrapper>
  );
}
