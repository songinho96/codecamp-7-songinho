import { getDate } from "../../../commons/libraries/utils";
import * as S from "./BoardDetail.styles";
import { Image } from "antd";

export default function BoardDetailUI(props) {
  return (
    <S.Wrapper>
      {/* 게시글 화면 */}

      {/* 헤더 */}
      <S.WrapperCard>
        <S.WrapperHeader>
          <S.Profile>
            <S.ProfileIcon src="/detailBoard/profile-Icon.svg" /> {/* 아이콘 */}
            <S.WrapperProfileInfo>
              <S.InfoWriter>{props.data?.fetchBoard.writer}</S.InfoWriter>
              <S.InfoDate>
                {getDate(props.data?.fetchBoard.createdAt)}
              </S.InfoDate>
            </S.WrapperProfileInfo>
          </S.Profile>
          <S.WrapperHeaderIcon>
            <S.ShareIcon src="/detailBoard/share-Icon.svg" /> {/* 아이콘 */}
            <S.Pop
              placement="topLeft"
              arrowPointAtCenter
              content={props.data?.fetchBoard.boardAddress?.addressDetail}
              title={props.data?.fetchBoard.boardAddress?.address}
            >
              <S.LocationIcon src="/detailBoard/location-Icon.svg" />
            </S.Pop>
            {/* 아이콘 */}
          </S.WrapperHeaderIcon>
        </S.WrapperHeader>

        {/* 언더라인 */}
        <S.Underline></S.Underline>

        {/* 게시글 바디 */}
        <S.WrapperBody>
          <S.Subject>{props.data?.fetchBoard.title}</S.Subject>
          <S.WrapperContents>
            <S.Images>
              {props.data?.fetchBoard.images
                ?.filter((el) => el)
                .map((el) => (
                  <div key={el}>
                    <S.Image src={`https://storage.googleapis.com/${el}`} />
                  </div>
                ))}
            </S.Images>

            <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>

            <S.Video>
              {props.data?.fetchBoard.youtubeUrl && (
                <props.ReactPlayer
                  url={props.data?.fetchBoard.youtubeUrl}
                  width={"100%"}
                  height={240}
                  controls={true}
                  playing={true}
                  muted={true}
                />
              )}
            </S.Video>
            <S.WrapperThumbs>
              <S.InputThumbs>
                <S.LikeIcon
                  src="/detailBoard/like-Icon.svg"
                  onClick={props.onClickLike}
                />
                <S.ThumsNumber>
                  {props.data?.fetchBoard.likeCount}
                </S.ThumsNumber>
              </S.InputThumbs>
              <S.InputThumbs>
                <S.DisLikeIcon
                  src="/detailBoard/dislike-Icon.svg"
                  onClick={props.onClickDisLike}
                />
                <S.ThumsNumber>
                  {props.data?.fetchBoard.dislikeCount}
                </S.ThumsNumber>
              </S.InputThumbs>
            </S.WrapperThumbs>
          </S.WrapperContents>
        </S.WrapperBody>
      </S.WrapperCard>

      <S.WrapperButton>
        <S.Button onClick={props.onClickMoveList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveEdit}>수정하기</S.Button>
        <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
      </S.WrapperButton>
      <S.Underline2></S.Underline2>
    </S.Wrapper>
  );
}
