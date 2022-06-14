import React, { useState } from 'react'
import '../components/Header.css'
import logo from '../images/zoozle.svg'
import Login from './Login'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const Header = () => {

  const [gotolink, setGotolink] = useState(false);

  if(gotolink){
    return <Login to='/login'/>
  }
  return (
    
    <div className='main-header'>
        <img src={logo} alt='' className='logo-img'/>
        <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
      <button onClick={ () => {
        return setGotolink(true)
      }} className='login-btn' >Login</button>

    </div>
  )
}

export default Header