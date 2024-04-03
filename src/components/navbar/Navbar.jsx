import './navbar.scss'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [openMenue,setopenMenu]=useState(false)
  const [user,setuser]=useState(false)
  useEffect(()=>{
    const email=window.localStorage.getItem('email')
  if(email!==null){
    setuser(true)
  }
  },[])
  
  return (
    <nav>
        <div className="left">
          <Link to={'/'} className='logo'>
            <img src='/logo.png' alt='logo' />
            <span>LotusEstren</span>
          </Link>
          <Link to={'/'}>Home</Link>
          <Link to={'/'}>About</Link>
          <Link to={'/list'}>Lists</Link>
          <Link to={'/'}>Contact</Link>
        </div>
        <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to='/signin'>Sign in</Link>
            <Link to='/register' className="register">
              Sign up
            </Link>
          </>
        )}
          <div className="menuIcon" >
            <img src="/menu.png" alt="menu" onClick={()=>setopenMenu((prev)=>!prev)}/>
          </div>
          <div className={`${openMenue ? 'menu active':'menu'}`} >
          <Link to={'/'}>Home</Link>
          <Link to={'/'}>About</Link>
          <Link to={'/'}>Contact</Link>
          <Link to={'/'}>Agents</Link>
          <Link to={'/'}>Sign up</Link>
          <Link to={'/'}>Sign in</Link>
          </div>
        </div>
    </nav>
  )
}

export default Navbar