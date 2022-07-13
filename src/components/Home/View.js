import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const response = await axios.get("https://api-teste-filmes.herokuapp.com/movies")
    if(response.status === 200){
      setData(response.data)
    }
  }

  console.log(data)

  return (
    <div>
      {data && data.map((item, index) => {
        return(
          <div></div>
        )
      })}
    </div>
  )
}

export default Home