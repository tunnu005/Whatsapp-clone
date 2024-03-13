
import User from "../models/user.js"

export const addUser = async(req,res) =>{
    try{
            const exist=await User.findOne({sub:req.body.sub});
            if(exist)
            {
                res.status(200).json({msg:'already exist'})
                return;
            }
            else{
                const newUser = new User(req.body);
                await newUser.save();
                return res.status(200).json(newUser)
            }
    }catch(err){
        return res.status(500).json(err)
    }
    
}

export const getUsers = async(req,res) =>{
    try{
        const users=await User.find({});
        return res.status(200).json(users);
    }catch(err){
        return res.status(500).json(err.massage);
    }
}

