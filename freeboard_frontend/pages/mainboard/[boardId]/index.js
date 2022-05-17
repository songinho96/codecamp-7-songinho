import * as S from '../../../styles/emotionClone-detailPage'
import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId){
      _id
      writer
      title
      contents
    }
  }
`



export default function DetailPage() {
  
  const router = useRouter()


  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId}  //일반적으로 똑같이 씀 boardId
  })   // 모두 한줄  FETCH_BOARD요청 data에 저장, 처음에 undefined => data

  console.log(data)


  return (
      <S.Wrapper>
        {/* 게시글 화면 */}
        
          {/* 헤더 */}
            <S.WrapperHeader>
              <S.Profile>
                <S.ProfileIcon src="/detailBoard/profile-Icon.svg" /> {/* 아이콘 */} 
                <S.WrapperProfileInfo>
                  <S.InfoWriter>{data?. fetchBoard.writer}</S.InfoWriter>
                  <S.InfoDate>InfoDate</S.InfoDate>
                </S.WrapperProfileInfo>
              </S.Profile>
              <S.WrapperHeaderIcon>
                <S.ShareIcon src="/detailBoard/share-Icon.svg" />  {/* 아이콘 */} 
                <S.LocationIcon src="/detailBoard/location-Icon.svg" /> {/* 아이콘 */} 
              </S.WrapperHeaderIcon>
            </S.WrapperHeader>

          {/* 언더라인 */}
          <S.Underline></S.Underline>

          {/* 게시글 바디 */}
            <S.WrapperBody>
              <S.Subject>{data?. fetchBoard.title}</S.Subject>
              <S.WrapperContents>
                <S.Picture src="/detailBoard/picture.svg" />
                <S.Contents>{data?. fetchBoard.contents}</S.Contents>
                <S.Video src="/detailBoard/video.svg" />
                <S.WrapperThumbs>
                  <S.InputThumbs>
                    <S.LikeIcon src="/detailBoard/like-Icon.svg" />
                    <S.ThumsNumber>1234</S.ThumsNumber>
                  </S.InputThumbs>
                  <S.InputThumbs>
                    <S.DisLikeIcon src="/detailBoard/dislike-Icon.svg" />
                    <S.ThumsNumber>1234</S.ThumsNumber>
                  </S.InputThumbs>
                </S.WrapperThumbs>
              </S.WrapperContents>
            </S.WrapperBody>

        
      </S.Wrapper>

  )


}