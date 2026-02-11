import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import PrivateRoute from './utils/PrivateRoute'
import Home from './components/Home'
const App = () => {

  return <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
   <Route path='/' element={<Register/>}></Route>
   <Route path='/login' element={<Login/>}></Route>
   <Route element={<PrivateRoute/>}>
    <Route path='/home' element={<Home/>}></Route>
   </Route>
  </Routes>
  </BrowserRouter>
  
  </>
}

export default App