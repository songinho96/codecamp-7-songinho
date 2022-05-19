import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import ProductWriteUI from "./ProductWrite.presenter"
import { CREATE_PRODUCT, UPDATE_PRODUCT} from './ProductWrite.queries'


export default function ProductWrite(props) {

  const router = useRouter()

  const [seller, setSeller] = useState("")
  const [name, setName] = useState("")
  const [detail, setDetail] = useState("")
  const [price, setPrice] = useState("")

  const [data, setData] = useState({})
  const [callGraphql] = useMutation(CREATE_PRODUCT)

  const [updateProduct] = useMutation(UPDATE_PRODUCT)




  const onClickGraphqlApi = async () => {
    
    
    // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식
    
    const result = await callGraphql({
      variables: {
        seller,
        createProductInput: {
          name,
          detail,
          price: Number(price)
        }
      }
    })
    console.log(result)
    setData(result.data.createProduct)

    router.push(`/quiz/08-quiz/${result.data.createProduct._id}`)
  }

  const onClickUpdate = async () => {
    const result = await updateProduct({
      variables : { 
        // productId: router.query.number,
        productId: router.query._id,
        updateProductInput: {
          name,
          detail,
          price: Number(price)
        }
      }
    })
    console.log(result)

    router.push(`/quiz/08-quiz/${result.data.updateProduct._id}`)
  }

  const onChangeSeller = (event) => {
    setSeller(event.target.value)
  }

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangeDetail = (event) => {
    setDetail(event.target.value)
  }

  const onChangePrice = (event) => {
    setPrice(event.target.value)
  }




  return (
    <ProductWriteUI
      onChangeSeller = {onChangeSeller}
      onChangeName = {onChangeName}
      onChangeDetail = {onChangeDetail}
      onChangePrice = {onChangePrice}
      onClickGraphqlApi = {onClickGraphqlApi}

      onClickUpdate = {onClickUpdate}

      data={data}
      isEdit={props.isEdit}
      />
  )
}
