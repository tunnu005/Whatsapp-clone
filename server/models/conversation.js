import mongoose from "mongoose";

const ConvetrsationSchema=mongoose.Schema({

    member:{
        type:Array
    },
    message:{
        type:String
    }},
    {
        timestamps:true
    });

const conversation = mongoose.model('Conversation',ConvetrsationSchema);
export default conversation;