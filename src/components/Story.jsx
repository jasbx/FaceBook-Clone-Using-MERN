import { Avatar } from '@mui/material'
import React from 'react'
import './styles/story.css'
const Story = ({
    image,
    profile,
    title}) => {
  return (
    <div className='story' style={{backgroundImage:`url(${image})`}}>
    <Avatar src={profile} className='storyprofile'/>
<h4>{title}</h4>
    </div>
  )
}

export default Story
