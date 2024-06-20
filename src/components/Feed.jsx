import React ,{useState,useEffect} from 'react'
import StoryReel from './StoryReet'
import MessangeSender from './MessangeSender'
import Post from './Post'
const Feed = () => {
  const [postData,setData]=useState([])
  useEffect(()=>{
    FetchData()
  },[])
  const FetchData=async()=>{
  await  fetch("http://localhost:3001/posts/")
    .then(res=>res.json())
    .then((data)=>setData(data))
    
  }
 
console.log(postData)
  return (
    <div className='feed'>

   <StoryReel/>
  
    <MessangeSender/>
  
   
     {
        postData.map((entry)=>(
            <Post
            key={entry.id}
            profile={entry.avatar}
            message={entry.text}
            timestamp={'123456'}
            image={entry.image}
            username={entry.user}
            
            />
        ))
    } 
    </div>
  )
}

export default Feed
