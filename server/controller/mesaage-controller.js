import mesagge from '../models/message.js'
import conversation from '../models/conversation.js';

export const newMessage =async (req,res) =>{

    try{
        
        const newMasseges= new mesagge(req.body);
        
        
         await newMasseges.save();
        
         

          await conversation.findByIdAndUpdate(req.body.conversationId,{message : req.body.text})



        return res.status(200).json('message hase been sent')


    }catch(err){
            return res.status(500).json('error while seding message : ',err.mesagge)
    }
    
}

export const getMasseges= async(req,res)=>{
    try{
      const messages_  = await mesagge.find({conversationId:req.params.id})
      return res.status(200).json(messages_)
    }catch(err){
        return res.status(500).json(err.mesagge)
    }
}

