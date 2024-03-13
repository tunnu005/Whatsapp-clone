import mongoose from 'mongoose'

const URL='mongodb://0.0.0.0:27017/whatsapp-clone'
const Connection = async () =>{
    try{
       await  mongoose.connect(URL,{useUnifiedTopology:true})
       console.log('Database connected')
        
    
    }catch(err){
        console.log('Error : ',err);
    }
}
export default Connection;