import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {ToastContainer} from "react-toastify"
import Home from "./components/Home/View"
import AddMovie from "./components/AddMovie/View"
import EditMovie from "./components/EditMovie/View"
import Header from "./components/Header/View"
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return(
    <BrowserRouter>
      <div className='App'>
        <Header />
        <ToastContainer/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/add" element={<AddMovie/>}/>
          <Route path="/update/:id" element={<EditMovie/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
