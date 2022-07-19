import React, {useEffect, useState} from 'react'
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

  const{id} = useParams()

  useEffect(() => {
    if(id){
      getSingleUser(id)
    }
  },[])

  const getSingleUser = async (id) => {
    const response = await axios.get(`https://api-teste-filmes.herokuapp.com/movie/${id}`)
    if (response.status === 200) {
      setState({...response.data})
    }
  }

  const updateMovie = async (data, id) => {
    const response = await axios.put(`https://api-teste-filmes.herokuapp.com/movie/${id}`, data)
    if (response.status === 200) {
      toast.success("Filme atualizado com sucesso !!!")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !year){
      toast.error("Os campos de nome e ano são obrigatórios !!!")
    }else{
      updateMovie(state, id)
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
      <h1 className="title" style={{textAlign: "center"}}>Editar um Filme</h1>
      <div className='form'>
        <FormMovie change={handleInputChange} valueName={name} valueYear={year} valueStreaming={streaming} submit={handleSubmit} isChecked = {streaming}/>
      </div>
    </div>
  )
}

export default EditMovie