import * as S from "./BoardWrite.styles"

export default function BoardWriteUI(props){

  return (
    <div>
      작성자: <S.WriterInput type = "text" onChange={props.aaa} />
      제목: <input type = "text" onChange={props.onChangeTitle} />  
      내용: <input type = "text" onChange={props.onChangeContents} />
      <div>{props.data.number}</div>
      <div>{props.data._id}</div>
      <div>{props.data.message}</div>
      <S.SubmitButton onClick={props.onClickGraphqlApi} isActive={props.isActive}>GRAPHQL-API 요청하기!!!</S.SubmitButton>
    </div>  // isActive = false
  )


}