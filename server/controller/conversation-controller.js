import conversation from "../models/conversation.js";



export const newConversation = async (req, res) => {
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;

        const exist = await conversation.findOne({ member: { $all: [senderId, receiverId] } });
        

        if (exist) {
            return res.status(200).json('conversation already exist')
        }
        const NewConversation = new conversation({
            member: [senderId, receiverId]
        })
        await NewConversation.save();
        res.status(200).json('conversation saved successfully')

    } catch (err) {
        return res.status(500).json(err.massage)
    }
}

export const getconversation =async(req,res) =>{
    try{

        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;

        

        const conversations = await conversation.findOne({ member: { $all: [senderId, receiverId] } });
        return res.status(200).json(conversations);
        
    }catch(err){
        return res.status(500).json(err.massage)
    }
}



