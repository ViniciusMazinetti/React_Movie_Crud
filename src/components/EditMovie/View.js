import React, {useState, useEffect} from 'react'
import {useHistory, useLocation} from "react-router-dom"
import axios from "axios"
import FormMovie from "./../FormMovie/View"

const initialState = {
  name: "",
  year: 0,
  streaming: false
}

const EditMovie = () => {
  const [state, setState] = useState(initialState)

  const {name, year, streaming} = initialState
  return(
    <div>
      <h1 class="title" style={{textAlign: "center"}}>Editar Filme</h1>
      <div class="formContainer" style={{margin: "2rem 50rem"}}>
        <FormMovie/>
      </div>
    </div>
  )
}

export default EditMovie