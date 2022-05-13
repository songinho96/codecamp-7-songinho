import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId){
      _id
      seller
      name
      detail
      price
    }
  }
`;


export default function DetailPage() {
  const router = useRouter()
  console.log(router)


  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {productId :router.query.number}
  })

  console.log(data)

  return (
    <div>
      <div>{router.query.number} 페이지 이동</div>
      <div>판매자: {data? data.fetchProduct.seller : "loading..." } </div>
      <div>상품명: {data? data.fetchProduct.name : "loading..." } </div>
      <div>상품내용: {data? data.fetchProduct.detail : "loading..." } </div>
      <div>상품가격: {data? data.fetchProduct.price : "loading..."} </div>
    </div>

  )


}