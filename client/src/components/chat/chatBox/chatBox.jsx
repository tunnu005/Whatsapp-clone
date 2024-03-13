import { Box } from "@mui/material";
import Message_chat from "./chat_Messages";
import ChatHeader from "./chat_header";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getconversation } from "../../../service/api";




const ChatBox = () => {

    const { person,account } = useContext(AccountContext)
    const [conversations,setConversations] = useState({})
    

    useEffect(()=>{
        const getconversationdetails=async()=>{
          let  data =  await getconversation({senderId:account.sub,receiverId:person.sub});
          setConversations(data);
          
        }
        getconversationdetails();
    },[person.sub])


    return (

        <Box >
            <ChatHeader person={person}/>
            <Message_chat person={person} conversations={conversations}/>
        </Box>
    )
}

export default ChatBox;