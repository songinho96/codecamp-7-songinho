import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";


const FETCH_PRODUCTS = gql`
  query fetchProducts{
    fetchProducts{
      _id
      seller
      name
      detail
      price
      createdAt
  }
}
`

const DELETE_PRODUCT = gql`
  mutation deleteProduct($aaa: ID){
    deleteProduct(productId: $aaa){
      _id
      number
      message
    }
  }
`

const MyRow = styled.div`
  display: flex;
`

const MyColumn = styled.div`
  width: 25%;
`

export default function MapProductPage(){
  const [deleteProduct] = useMutation(DELETE_PRODUCT)
  const { data } = useQuery(FETCH_PRODUCTS)

  const onClickDelete = (event) => {
    console.log(event.target.id)
      deleteProduct({
        variables: { aaa : event.target.id},
        refetchQueries: [{ query: FETCH_PRODUCTS }]
      })
  }


  return (
    <div>
      {data?.fetchProducts.map((el) => (
        <MyRow key = {el._id}>
          <MyColumn><input type="checkbox" /></MyColumn>
          <MyColumn>{el._id}</MyColumn>
          <MyColumn>{el.seller}</MyColumn>
          <MyColumn>{el.name}</MyColumn>
          <MyColumn>{el.detail}</MyColumn>
          <MyColumn>{el.price}</MyColumn>
          <MyColumn>{el.createdAt}</MyColumn>
          <MyColumn>
            <button id={el._id}  onClick={onClickDelete}>삭제</button>
          </MyColumn>
        </MyRow>
      ) )}

    </div>
    )

}