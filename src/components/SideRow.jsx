import React from 'react'
import './styles/siderow.css'
import { Avatar } from '@mui/material'
const SideRow = ({src,title,Icon}) => {
  return (
    <div className='siderow'>
      {src&& <Avatar src={src}/>}
      {Icon&& <Icon/>}
      <p>{title}</p>
    </div>
  )
}

export default SideRow
