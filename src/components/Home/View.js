import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    let config = {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        }
      }
    const response = await axios.get("https://api-filmes-sg-vinicius.herokuapp.com/movies",config)
    if(response.status === 200){
      setData(response.data)
    }
  }

  console.log(data)

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home