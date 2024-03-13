import { Box, Typography, styled } from "@mui/material"
import { FormateDate,downLoadMedia } from "../../../utils/common-utils"
import { useContext } from "react"
import { AccountContext } from "../../../context/AccountProvider"
import GetAppIcon from '@mui/icons-material/GetApp';
import { iconPDF } from "../../../data";

const Own = styled(Box)`
    background:#5cf2a0;
    max-width:60%;
    margin-left:auto;
    padding:5px;
    width:fit-content;
    display:flex;
    border-radius:15px;
    word-break:break-word;
    box-shadow: 1px 2px;
    margin-bottom:1px;
`
const Wrapper = styled(Box)`
    background:#86f7e4;
    max-width:60%;
    margin-right:auto;
    padding:5px;
    width:fit-content;
    display:flex;
    border-radius:15px;
    word-break:break-word;
    box-shadow: 1px 2px;
    margin-bottom:1px;
`

const Text = styled(Typography)`
    font-size:14px;
    padding:0 25px 0 5px;
    font-family:Lucida Handwriting;
`
const Time = styled(Typography)`
    font-size:10px;
    color:#f7f7f7;
    margin-top:auto;
    word-break:keep-all;
`

const Messages = ({ message }) => {

    const { account } = useContext(AccountContext)

    return (
        <>
            {
                account.sub === message.senderId ?
                    <Own>
                       {
                        message.type === 'file' ? <ImageMessage message={message} />
                        :
                        <TextMessage message={message} />
                       }
                        
                    </Own>
                    :
                    <Wrapper>
                        {
                        message.type === 'file' ? <ImageMessage message={message} />
                        :
                        <TextMessage message={message} />
                       }
                    </Wrapper>
            }
        </>

    )
}

const TextMessage = ({message}) =>{
    return(

        <>
             <Text>{message.text}</Text>
             <Time>{FormateDate(message.createdAt)}</Time>
        </>
    )
}

const ImageMessage = ({message}) =>{
    return(
      <Box style={{position:'relative'}}> <Text>
        {
            message?.text?.includes('.pdf') ? 
            <Box style={{display : 'flex'}}>
                <img style = {{width:50,height:60}} src={iconPDF} alt="PDF" />
                <Typography style={{fontSize:15,fontFamily:'Garamond',paddingLeft:5}}>{message.text.split('/').pop()}</Typography>

            </Box>
            :
            <img style = {{width:300 , height:'100%', objectFit:'cover'}} src={message.text} alt={message.text} />
        }
       </Text>
       <Time style={{position:'absolute',bottom:0,right:0}}>
        <GetAppIcon 
            onClick={(e)=>{downLoadMedia(e,message.text)}}
            style={{marginRight: 10,border:'1px solid grey', borderRadius:'50%',cursor:'pointer'}}
            fontSize="small"
        />
        {FormateDate(message.createdAt)}</Time>
       </Box>
    )
}
export default Messages;