import './profile.scss'
import Chat from '../../components/chat/Chat'
import List from '../../components/list/List'
import { useRef, useState } from 'react'

function Profile() {
  const chat=useRef()
  const chatwidth=useRef()

  function openchat(){
    chat.current.classList.add('active')
    chatwidth.current.classList.add('active')
    
  }
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <div className='btns'>
              <button>Update Profile</button>
              <button className='chatbtn' onClick={openchat}>chats</button>
            </div>
          </div>
            
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              E-mail: <b>john@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer" ref={chat}>
        <div className="wrapper" ref={chatwidth}>
          <Chat refrence={chat} chatwidth={chatwidth}/>
        </div>
      </div>
    </div>
  )
}

export default Profile