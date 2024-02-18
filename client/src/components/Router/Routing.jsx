import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'

const Routing = () => {
  return (
    <>
    <Routes>
        <Route path='/Login' element={<Login/>} />
        <Route path='/Signup' element={<SignUp/>} />
    </Routes>
    </>
  )
}

export default Routing