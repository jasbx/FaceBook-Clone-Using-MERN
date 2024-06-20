import React from 'react'
import './styles/post.css'




import { Avatar } from '@mui/material'
import { AccountCircle, ChatBubble, ExpandMore, NearMe, ThumbUp } from '@mui/icons-material'
const Post = ({
    image,
    profile,
    username,
    timestamp,
    message

}) => {
  return (
    <div className='post'>
        <div className="post_top">
            <Avatar src={profile} className='post_avatar'/>
        <div className="post_top_info">
            <h3>{username}</h3>
            <p>{new Date(parseInt(timestamp)).toUTCString()}</p>    
       
 
       </div>
        
        
        
        </div>
<div className='post-buttom'>
    <p>{message}</p>
    <div className="post_image">
        {image && <img src={image} alt=""/>}
    </div>
    
    </div>


        <div className="post_options">
<div className="post_option">
    <ThumbUp/>
    <p>Like</p>
</div>
<div className="post_option">
    <ChatBubble/>
    <p>Comment</p>
</div>
<div className="post_option">
    <NearMe/>
    <p>Share</p>
</div>
<div className="post_option">
    <AccountCircle/>
    <ExpandMore/>
</div>
       </div>
    </div>
  )
}

export default Post
