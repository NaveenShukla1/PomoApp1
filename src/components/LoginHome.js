import React from 'react'
import {signOut} from 'firebase/auth'
import { database } from '../firebaseConfig'
import Timer from './Timer'
import {useNavigate} from 'react-router-dom'
import './LoginHome.css';
function LoginHome() {
  const history = useNavigate();

  const handleClick = () =>{
    signOut(database).then(val=> {
      history('/')
    })
  }
  return (
    <div>
      <button onClick={handleClick} >Sign Out</button>
      <Timer/>

    </div>
  )
}

export default LoginHome