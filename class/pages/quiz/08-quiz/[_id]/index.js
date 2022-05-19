import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'



const FETCH_PRODUCT = gql `
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId){
      _id
      seller
      name
      detail
      price
  }
  }
`

export default function StaticRoutedPage() {
  const router = useRouter()


  const { data } = useQuery(FETCH_PRODUCT, {
    // variables: {productId: router.query.number}
    variables: {productId: router.query._id}
  })

  const onClickMoveToEdit = () => {
    router.push(`/quiz/08-quiz/${router.query._id}/edit`)
  }




  return (
    <div>xw
      <div>이름: {data?.fetchProduct.name} </div>
      <div>내용: {data ? data.fetchProduct.detail : "조금만 기다려주세요..."} </div>
      <div>가격: {data ? data.fetchProduct.price : "조금만 기다려주세요..."} </div>
      <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
    </div>
  )
}
