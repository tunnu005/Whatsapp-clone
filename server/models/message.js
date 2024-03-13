

import mongoose from "mongoose";


const messageSchema=mongoose.Schema({
    conversationId:{
        type:String,
    },
    senderId:{
        type:String,
    },
    receiverId:{
        type:String,
    },
    text:{
        type:String,
    },
    type:{
        type:String,
    },


},
{
    timestamps:true
})

const messag=mongoose.model('Message',messageSchema)
export default messag
