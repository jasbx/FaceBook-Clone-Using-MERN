import React, { useState } from 'react'
import './styles/MessangeSender.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import { Avatar, Input } from '@mui/material'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
const MessangeSender = () => {
  const [input,setInput]=useState('')
 

  const HandleSubmit=()=>{
   
    
    fetch("http://localhost:3001/new/post/",{
      method:'POST',
      headers:{
        'Content-type': 'application/json; charset=UTF-8',
      },
      body:JSON.stringify({
        text:input
      })
    })

  }
  return (
    <div className='messageSender'>
      <div className='messageSenderTop'>
        <Avatar src='/jassim.jpg'/>
        <form onSubmit={HandleSubmit}>
          <input type="text"
          className='msg-input'
            placeholder='Whats on your minde ?...'
            onChange={(e)=>setInput(e.target.value)}
            />
          
          <Input 
          className='messanger_file' type="file"
   />
        <button   type='submit'>Hidden Submit</button>
        </form>
      </div>
      <div className="messanger_buttom">
        <div className="messanger-option">
          <VideocamIcon style={{color:'red'}} />
          <h3>Live Video</h3>
        </div>
        <div className="messanger-option">
          <PhotoLibraryIcon style={{color:'green'}}/>
          <h3>Photo/video</h3>
        </div>
        <div className="messanger-option">
          <InsertEmoticonIcon style={{color:'orange'}}/>
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  )
}

export default MessangeSender
