import mongoose from "mongoose";
const Schema=mongoose.Schema

const PostSchema=new Schema({
    user:{
        type:String,
     
    },
    image:{
        type:String,
    
    },
    text:{
        type:String,
        required:true
    },
    avatar:{
       String
    }
},{
    timestamps:true
})

const Post=mongoose.model("User",PostSchema)
export  default Post
