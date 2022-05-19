import React from 'react'
import * as S from "./ProductWrite.styles"

export default function ProductWriteUI(props) {
  return (
    <div>
      <h1>{props.isEdit ? "수정" : "등록"} 페이지</h1>
      판매자: <S.WriterInput type = "text" onChange={props.onChangeSeller} />
      이름: <input type = "text" onChange={props.onChangeName} />  
      내용: <input type = "text" onChange={props.onChangeDetail} />
      가격: <input type = "text" onChange={props.onChangePrice} />
      <div>{props.data.number}</div>
      <div>{props.data._id}</div>
      <div>{props.data.message}</div>
      <button 
      onClick={props.isEdit ? props.onClickUpdate : props.onClickGraphqlApi}>
        
        {props.isEdit ? "수정" : "등록"} 하기
      </button>
    </div>
  )
}
