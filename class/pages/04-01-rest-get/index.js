import axios from 'axios' // 백에서 데이터를 받기 위해 axios import
import { useState } from 'react'


export default function RestGetPage() {

  const [data, setData] = useState("")

  // const handleClickRestApi = () => {

  // }

  const onClickRestApi = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1")
    console.log(result)

    setData(result.data.title)

  }

  return (
    <div>
      <div>{data}</div>
      <button onClick={onClickRestApi}>REST-API 요청하기!!!</button>
    </div>
  )

}