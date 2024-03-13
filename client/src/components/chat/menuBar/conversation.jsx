
import { useEffect, useState,useContext } from "react";
import { getUsers } from "../../../service/api";
import { Box } from "@mui/material";
import UserConvertion from "./UserConvertion";
import {AccountContext} from "../../../context/AccountProvider"
import styled from "@emotion/styled";



const Component= styled(Box)`
        height:81vh;
        overflow:overlay;
        
    `




const Conversation = ({ text }) =>{

    const  { account,socket,activeUsers,setActiveUsers,person}  = useContext(AccountContext);
    const [Users,setuser]=useState([]);
    
   



    

    useEffect(()=>{
       const fetchdata = async () =>{
            const response=await getUsers();
            const filterdata=response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))

            setuser(filterdata);
            
       }
       fetchdata();
    },[text])

    useEffect(()=>{
        socket.current.emit('addusers',account)
        socket.current.on("getUser",users =>{
           setActiveUsers(users)
           console.log("thi is active : ",activeUsers)
        
        })
            

        
    },[account])

     
    

    return(

        <Component>
            
                {
                    Users.map(user=>(
                        
                        user.sub !== account.sub &&
                        <UserConvertion user={user} activeUsers={activeUsers} />
                        
                       
                        
                       
                        
                        
                    ))
                }
                

        </Component>
        
    )
}

export default Conversation;