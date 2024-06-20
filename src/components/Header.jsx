import React from 'react'
import './styles/header.css'
import AddIcon from '@mui/icons-material/Add';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FlagIcon from '@mui/icons-material/Flag';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

const Header = () => {
  return (
    <div className='header'>
      <div className="herder-left">
        <img className='img' src="/logo.jpeg" alt="facebook logo" />
      </div>
      <div className="header-input">
        <SearchIcon fontSize='large'/>
        <input type="text" placeholder='Search Facebook'/>
      </div>
      <div className='header-center'>
<div className="header-option header-option-active ">
  <HomeIcon fontSize='large'/>
</div>
<div className="header-option  ">
  <FlagIcon fontSize='large'/>
</div>
<div className="header-option  ">
  <SubscriptionsIcon fontSize='large'/>
</div>
<div className="header-option  ">
  <StorefrontIcon fontSize='large'/>
</div>
<div className="header-option  ">
  <SupervisedUserCircleIcon fontSize='large'/>
</div>

      </div>
      <div className="header-right">
        <div className="headerInfo">
          <Avatar  src='/jassim.jpg'/>
          <h4>Jassim Mohammed</h4>
        </div>
        <AddIcon/>
        <ForumIcon/>
       
       <NotificationsIcon/>
        <ExpandMoreIcon/>
      </div>
    </div>
  )
}

export default Header
