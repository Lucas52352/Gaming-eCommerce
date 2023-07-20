import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import "./login.css"
import logo from "./img/logoNext.png"

function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="loginContainer">
      <img src={logo} alt="" id='logo'/>
    <button onClick={() => loginWithRedirect()} className='botonesLogin'>Log In</button>
    <button onClick={() => loginWithRedirect()} className='botonesLogin'>Register</button>
    </div>
  )
}

export default Login