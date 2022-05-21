import { ChangeEvent } from "react"

export interface IBoardWriteprops{
  isEdit: boolean
  boardData?: any
}

export interface IMyvariables {
  number: number
  writer?: string
  title?: string
  contents?: string
}

export interface IBoardWriteUIprops {
  aaa: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void 
  onChangeContents:  (event: ChangeEvent<HTMLInputElement>) => void
  onClickGraphqlApi:  () => void     
  onClickUpdate: () => void
  data: {
    number?: number
    _id?: string
    message?: string
  }
  isEdit: boolean
  boardData?: any 
}
