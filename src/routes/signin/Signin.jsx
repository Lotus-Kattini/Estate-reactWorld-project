import { useState } from 'react';
import './signin.scss'
import { Link, useNavigate } from 'react-router-dom'

function Signin() {
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('')
    const nav=useNavigate()

    function loginigin(){
        const Email=window.localStorage.getItem('email')
        const pass=window.localStorage.getItem('password')
        if((Email === email) && (pass===password)){
            nav('/')
        }
        else{
            alert('Email OR password Wrong!')
        }
    }

  return (
    <div className='signin'>
    <div className="wrapper">
    <h2>Log In</h2>
    <form action="#">
      <div className="input-box">
        <input type="text" placeholder="Enter your email" required value={email} onChange={(e)=>setemail(e.target.value)}/>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Create password" required value={password} onChange={(e)=>setpassword(e.target.value)}/>
      </div>
      <div className="input-box button">
        <input type="Submit" value="Sign In" onClick={loginigin}/>
      </div>
      <div className="text">
        <h3>Don't have an account? <Link to={'/register'} className='link'>Register now</Link></h3>
      </div>
    </form>
  </div>
    </div>
  )
}

export default Signin