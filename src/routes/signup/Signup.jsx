import { useState } from 'react'
import './signup.scss'
import { Link, useNavigate } from 'react-router-dom'


function Signup() {
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('')
    const [passwordR,setpasswordR]=useState('') 
    const [passflagR,setpassflagR]=useState(false)
    const [flag,setflage]=useState(true)
    const nav=useNavigate()

    function register(){
        if(passwordR !== password){
            setpassflagR(true)
            setflage(false)
        }
        else{
            setpassflagR(false)
            setflage(true)
            if(flag){
                window.localStorage.setItem('email',email)
                window.localStorage.setItem('password',password)
                nav('/')
            }
        }
    }
  return (
    <div className="signup">
    <div className="wrapper">
    <h2>Registration</h2>
    <form action="">
      <div className="input-box">
        <input type="text" placeholder="Enter your name" required/>
      </div>
      <div className="input-box">
        <input type="text" placeholder="Enter your email" required value={email} onChange={(e)=>setemail(e.target.value)}/>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Create password" required min={8} value={password} onChange={(e)=>setpassword(e.target.value)}/>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Confirm password" required min={8} value={passwordR} onChange={(e)=>setpasswordR(e.target.value)}/>
        { passflagR && <span>passwords doesnt match!</span>}
      </div>
      <div className="policy">
        <input type="checkbox" />
        <h3>I accept all terms & condition</h3>
      </div>
      <div className="input-box button">
        <input type="Submit" value="Register Now" onClick={register}/>
      </div>
      <div className="text">
        <h3>Already have an account? <Link to={'/signin'} className='link'>Login now</Link></h3>
      </div>
    </form>
  </div>
  </div>
  )
}

export default Signup