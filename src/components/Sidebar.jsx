import React from 'react'
import SideRow from './SideRow'
import './styles/sidebar.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';

import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
// import {useStateValue} from ''

const Sidebar = () => {
    // const [{user},dispatch]=useStateValue()
  return (
    <div className='sidebar'>
    <SideRow src='/jassim.jpg' title="Jassim"/>
    <SideRow  Icon={EmojiFlagsIcon}  title="Pages"/>
    <SideRow  Icon={PeopleIcon}  title="Frindes"/>
    <SideRow Icon={ChatIcon}  title="Massenger"  />
    <SideRow  Icon={StorefrontIcon}  title="MarketPlace"/>
    <SideRow  Icon={VideoLibraryIcon}  title="Video"/>
    <SideRow Icon={ExpandMoreIcon}  title="More"/>
    </div>
  )
}

export default Sidebar
