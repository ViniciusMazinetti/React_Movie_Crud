import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import FormMovie from "./../FormMovie/View"
import { toast } from 'react-toastify'

const initialState = {
  name: "",
  year: 0,
  streaming: false
}

const AddMovie = () => {
  const [state, setState] = useState(initialState)

  const {name, year, streaming} = state

  const navigate = useNavigate()

  const addMovie = async (data) => {
    const response = await axios.post("https://api-teste-filmes.herokuapp.com/movie", data)
    if (response.status === 201) {
      toast.success("Filme cadastrado com sucesso !!!")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !year){
      toast.error("Os campos de nome e ano são obrigatórios !!!")
    }else{
      addMovie(state)
      navigate("/")
    }
  }

  const handleInputChange = (e) => {
    let {name, value} = e.target
    if (name === "streaming"){
      if (value === "false"){
        value = false
      } else {
        value = true
      }
      setState({...state,[name]:!value})
    }else{
      setState({...state,[name]:value})
    }
    
  }

  return(
    <div>
      <h1 className="title" style={{textAlign: "center"}}>Cadastrar um Filme</h1>
      <div className='form'>
        <FormMovie change={handleInputChange} valueName={name} valueYear={year} valueStreaming={streaming} submit={handleSubmit}/>
      </div>
    </div>
  )
}

export default AddMovie