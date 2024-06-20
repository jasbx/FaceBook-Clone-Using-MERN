import  express from 'express'
import  cors from 'cors'
import bodyParser from "body-parser"
import mongoose from "mongoose"
import Post from './model/Data.js'
const mongoUrl=""
mongoose.connect(mongoUrl)


//app config
const app =express()
const port =3001


//middleware
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())


//api

app.get('/posts/',async(req,res)=>{
   try {
    const posts=await Post.find()
    res.send(posts)
   
   } catch (error) {
    console.log(error)
    
   }
})
app.post('/new/post/',async(req,res)=>{

    try {
        const newPost=new Post(req.body)
        await newPost.save()
        res.send(newPost)
    } catch (error) {
      res.send(error)
    }
})




//listen

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
