import React, {useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios"
import FormMovie from "./../FormMovie/View"
import { toast } from 'react-toastify'

const initialState = {
  name: "",
  year: 0,
  streaming: false
}

const EditMovie = () => {
  const [state, setState] = useState(initialState)

  const {name, year, streaming} = state

  const navigate = useNavigate()

  const updateMovie = async (data) => {
    const response = await axios.post("https://api-teste-filmes.herokuapp.com/movie", data)
    if (response.status === 200) {
      toast.success(response.data)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !year){
      toast.error("Campos Nome e Ano são obrigatórios")
    }else{
      updateMovie(state)
      navigate("/")
    }
  }

  const handleInputChange = (e) => {
    let {name, value} = e.target
    setState({...state, [name]: value})
  }
  return(
    <div>
      <h1 class="title" style={{textAlign: "center"}}>Editar Filme</h1>
      <div class="formContainer" style={{margin: "2rem 50rem"}}>
        <FormMovie change={handleInputChange} valueName={name} valueYear={year} valueStreaming={streaming} submit={handleSubmit}/>
      </div>
    </div>
  )
}

export default EditMovie