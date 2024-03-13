import { Box,styled } from "@mui/material";
import Footer from "./footer";
import { useContext,useEffect,useState,useRef } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import {  getMessages, newMessage } from "../../../service/api";
import Messages from "./message";




const Wrapper = styled(Box)`
background-image:url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
background-size:50%;  

`
const Bg = styled(Box)`
height:80vh;
overflow-y:scroll;
`

const Comp = styled(Box)`
        padding:1px 80px;
        
`

const Message_chat= ({ person,conversations }) =>{

        const { account,socket } =useContext(AccountContext);
        const [value,setvalue]=useState('')
        const [message_s,setmessage_s]=useState([]); 
        const [newMessageflage,setnewMessageflage] = useState(false);
        const [file,setfile] = useState();
        const [Image,setImage]=useState('')
        const [incomingMessage,setincomingMessage]=useState(null);
        const scrollRef = useRef();

        useEffect(()=>{
                socket.current.on('getMessage',data=>{
                        setincomingMessage({
                                ...data,
                                createdAt:Date.now()
                        })

                })
        },[])


       useEffect(()=>{
                
                const getmessagedetail = async () =>{
                        
                        
                        const resonse = await getMessages(conversations._id)
                        setmessage_s(resonse)
                       
                } 
                conversations._id && getmessagedetail();
       },[person._id,conversations._id,newMessageflage])

       useEffect(()=>{
                scrollRef.current?.scrollIntoView({transition:'smooth'})

       },[message_s])

       useEffect(()=>{
                incomingMessage && conversations?.member?.includes(incomingMessage.senderId) &&
                setmessage_s(prev => [...prev,incomingMessage])

       },[incomingMessage,conversations])

        const sendText = async(e) =>{
                const code=e.keyCode || e.which
                
                if(code === 13)
                {
                        let message={};
                   if(!file){
                        message= {
                                conversationId:conversations._id,
                                senderId:account.sub,
                                receiverId:person.sub,
                                type:'text',
                                text:value
                               }
                   }else{
                        message= {
                                conversationId:conversations._id,
                                senderId:account.sub,
                                receiverId:person.sub,
                                type:'file',
                                text:Image
                               }
                   }

                   socket.current.emit('sendMessage',message);
                   
                  await newMessage(message);
                  setvalue('');
                  setImage('');
                  setfile('')
                  setnewMessageflage(prev => !prev)
                }
        }

        return(
            <Wrapper>
                    <Bg>
                        {
                                message_s && message_s.map(message =>(
                                       <Comp ref={scrollRef}>
                                         <Messages message={message} />
                                       </Comp>
                                ))
                        }
                    </Bg>
                    <Footer sendText={sendText}
                        setvalue={setvalue}
                        value={value}
                        file={file}
                        setfile={setfile}
                        setImage={setImage}
                    />
            </Wrapper>

    )
}

export default Message_chat;