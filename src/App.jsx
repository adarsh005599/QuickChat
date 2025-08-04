import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import  LoginPage from './Pages/LoginPage'
import ProfilePage from './Pages/ProfilePage'
import {Toaster} from 'react-hot-toast'
import { AuthContext } from '../context/AuthContext'


const App = () => {

  const {authuser} = useContext(AuthContext)


  return (
    <div className="bg-[url('/bgimage.svg')] bg-contain">

      <Toaster/>

      <Routes>
      <Route path='/' element={authuser ? <HomePage/>: <Navigate to="/login"/>}/>
      <Route path='/login' element={!authuser ? <LoginPage/>: <Navigate to="/"/>}/>
      <Route path='/profile' element={authuser ? <ProfilePage/> : <Navigate to="/login"/>}/>
      </Routes>
    </div>
  )
}

export default App

