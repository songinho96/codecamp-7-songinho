import {gql} from '@apollo/client'

export const CREAT_BOARD = gql `
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      writer
      title
      contents
      _id    
    }
  }
`