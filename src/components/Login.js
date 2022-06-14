import React from 'react'
import '../components/Login.css'
const Login = () => {
  return (
    <div className='login'>
        <div className='login-inputs'>
            <input type='email' placeholder='Enter your email'/>
            <input type='password' placeholder='Enter your password'/>
            <button type='submit'>Login</button>
        </div>
        
    </div>
  )
}

export default Login