import axios from 'axios'

const url='http://localhost:8000'

export const addUser = async(data)=>{
   try{
    
    await axios.post(`${url}/add`,data);
    

   }catch(err)
   {
    console.log("Error while adduser : ",err)
   }
};

export const getUsers = async() =>{
   try{
      let response =await axios.get(`${url}/users`);
      console.log(response)
      return response.data;

   }catch(err){
      console.log('error while fecthing : ',err)
   }
}

export const setconversation = async(data) =>{
   try{
         await axios.post(`${url}/conversation/add`,data)
       
   }catch(err){
      console.log('error while convertion : ',err)
   }
}

export const getconversation = async(data) =>{
   try{
         
       const reponce =  await axios.post(`${url}/conversation/get`,data);
       return reponce.data;
         

   }catch(err){
         console.log("error while getconversation : ",err.massege)
   }
}

export const newMessage = async (data) =>{
   try{
         
         await axios.post(`${url}/message/add`,data)
       

   }catch(err){
      console.log('Error while calling new Message api : ',err.message);
   }
}

export const getMessages = async (id) =>{
   try{
        
         let response= await axios.get(`${url}/message/get/${id}`)
         return response.data;
   }catch(err){
      console.log('Error while calling get Message api : ',err.message);
   }
}

export const uploudFile = async(data) =>{
   try{
      return await axios.post(`${url}/file/upload`,data);

   }catch(err){
      console.log('Error while calling uploud file api : ',err.message);
   }
}