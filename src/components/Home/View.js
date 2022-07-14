import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CardComponent from "./../Card/View"

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

  return (
    <div>
      {data && data.map((item, index) => {
        //Ternário
        const isStreaming = item.streaming ? "Sim" : "Não"
        return(
          <CardComponent title={item.name} index={index + 1} year={item.year} streaming={isStreaming}/>
        )
      })}
    </div>
  )
}

export default Home