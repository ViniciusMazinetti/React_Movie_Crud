import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CardComponent from "./../Card/View"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

const Home = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const response = await axios.get("https://api-teste-filmes.herokuapp.com/movies")
    if(response.status === 200){
      setData(response.data)
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <h1 className='text-center'>Filmes Listados</h1>
      {isLoading ? <Row className = "justify-content-md-center"><Spinner animation="border" role="status" className="m-5"/></Row> : 
        <Row className='justify-content-md-center'>
          {data && data.map((item, index) => {
            //Ternário
            const isStreaming = item.streaming ? "Sim" : "Não"
            return(
              <CardComponent key={item._id} title={item.name} index={index + 1} year={item.year} streaming={isStreaming} id={item._id}/>
            )
          })}
        </Row>
      }
    </Container>
  )
}

export default Home