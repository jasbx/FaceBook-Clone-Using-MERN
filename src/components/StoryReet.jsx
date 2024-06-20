
import React from 'react'
import './styles/storyreel.css'
import Story from './Story'
const StoryReel = ()=>{
    return (
 <div className='storyreel'> 
    <Story 
    image='/img/s1.jpg'
    profile='/img/p1.jpg'
    title='Ahmed Ali'
    
    />
    <Story 
    image='/img/s2.jpg'
    profile='/img/p2.jpg'
    title='Khalid abbas'
    
    />
    <Story 
    image='/img/s3.jpg'
    profile='/img/p3.jpg'
    title='Amit'
    
    />
    <Story 
    image='/img/s4.jpg'
    profile='/img/p4.jpg'
    title='Sandra John'
    
    />
    <Story 
    image='/img/s5.jpg'
    profile='/img/p5.jpg'
    title='Ali Addal'
    
    />
    <Story 
    image='/img/s6.jpg'
    profile='/img/p6.jpg'
    title='Ammad salh'
    
    />
 </div>
    
)
}

export default StoryReel
