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
      <FormMovie/>
    </div>
  )
}

export default EditMovie