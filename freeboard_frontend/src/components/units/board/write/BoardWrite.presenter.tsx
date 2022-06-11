import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import UploadBasicContainer from "../../../commons/uploads/basic/UploadBasic.container";
import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Wrap>
        <S.WrapBackButton>
          <S.BackButton
            onClick={
              props.isEdit ? props.onClickbackDetail : props.onClickbackList
            }
          >
            돌아가기
          </S.BackButton>
          <Modal
            title={props.isEdit ? "수정 취소" : "등록 취소"}
            visible={props.isBackVisible}
            onOk={props.onClickhandleOk}
            onCancel={props.handleCancel}
          >
            <p>
              {props.isEdit
                ? "수정 취소 하시겠습니까?"
                : "등록 취소 하시겠습니까?"}
            </p>
          </Modal>
        </S.WrapBackButton>
        <S.MainTitle>
          {props.isEdit ? "게시글 수정" : "게시글 등록"}
        </S.MainTitle>

        <S.WrapperWritePassword>
          <S.WraprWriter>
            <S.Label>작성자</S.Label>
            {/* <S.Writer type="text" /> */}
            <S.Writer
              ref={props.inputRef}
              type="text"
              placeholder="이름을 적어주세요"
              onChange={props.onChangeWriter}
              readOnly={!!props.boardData?.fetchBoard.writer}
              defaultValue={props.boardData?.fetchBoard.writer}
            />
            <S.Error>{props.writerError}</S.Error>
          </S.WraprWriter>

          <S.WrapPassword>
            <S.Label>비밀번호</S.Label>
            {/* <S.Password type="text" /> */}
            <S.Password
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangePassword}
            />
            <S.Error>{props.passwordError}</S.Error>
          </S.WrapPassword>
        </S.WrapperWritePassword>

        <S.WrapperTitle>
          <S.Label>제목</S.Label>
          {/* <S.Subject type="text" /> */}
          <S.Title
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.boardData?.fetchBoard.title}
          />
          <S.Error>{props.titleError}</S.Error>
        </S.WrapperTitle>

        <S.WrapperContents>
          <S.Label>내용</S.Label>
          {/* <S.Contents type="text" /> */}
          <S.Contents
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.boardData?.fetchBoard.contents}
          />
          <S.Error>{props.contentsError}</S.Error>
        </S.WrapperContents>

        <S.WrapperAddress>
          <S.Label>주소</S.Label>
          <S.WrapZipcode>
            <S.Zipcode
              placeholder="07250"
              readOnly
              value={
                props.zipcode ||
                props.boardData?.fetchBoard.boardAddress?.zipcode
              }
            />

            <S.SearchButton onClick={props.showModal}>
              우편번호 검색
            </S.SearchButton>
          </S.WrapZipcode>
          <S.Address
            readOnly
            value={
              props.address || props.boardData?.fetchBoard.boardAddress?.address
            }
          />

          <S.AddressDetail
            type="text"
            onChange={props.onChangeAddressDetail}
            defaultValue={
              props.boardData?.fetchBoard.boardAddress?.addressDetail
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
        </S.WrapperAddress>

        <S.WrapperYoutube>
          <S.Label>유튜브</S.Label>
          <S.YoutubeLink
            type="text"
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeYoutube}
            defaultValue={props.boardData?.fetchBoard.youtubeUrl}
          />
        </S.WrapperYoutube>

        <S.WrapperPicture>
          <S.Label>사진첨부</S.Label>
          <S.WrapUpload>
            {props.fileUrls.map((el, index) => (
              <UploadBasicContainer
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </S.WrapUpload>
        </S.WrapperPicture>

        <S.WrapperSetting>
          <S.Label>메인설정</S.Label>
          <S.WrapperRadio>
            <S.WrapRadio>
              <S.RadioButton type="radio" name="radioButton"></S.RadioButton>
              <S.RadioLabel>유튜브</S.RadioLabel>
            </S.WrapRadio>
            <S.WrapRadio>
              <S.RadioButton type="radio" name="radioButton"></S.RadioButton>
              <S.RadioLabel>사진</S.RadioLabel>
            </S.WrapRadio>
          </S.WrapperRadio>
        </S.WrapperSetting>

        <S.WrapperSubmit>
          {/* <S.SubmitButton></S.SubmitButton> */}
          <S.SubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isActive={props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </S.WrapperSubmit>
      </S.Wrap>
    </S.Wrapper>
  );
}
