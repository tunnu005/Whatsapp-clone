import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { setconversation } from "../../../service/api";
import RssFeedIcon from '@mui/icons-material/RssFeed';


const Wrapper=styled(Box)`
display:flex;
margin-top:7px;
cursor:pointer;

`
const Image=styled('img')({
borderRadius:'50%',
height:50,
width:50,
padding:'2px 2px 1px 4px'

})
const Text=styled(Box)`
font-size:24px;
align-text:center;
padding:10px 0px 2px 10px;
width:370px;
border-bottom: 1px solid #d4d4d4;


`

const AcitveUserIcon = styled(Box)`
    transform: translate(-20px,10px);
    color:#19ff47;

    
`


const UserConvertion = ({user,activeUsers}) =>{

    const { setperson,account } = useContext(AccountContext)



    const getUsers = async() =>{
        setperson(user);
        await setconversation({senderId:user.sub,receiverId:account.sub})
       
    }


    return(
        <>
            <Wrapper onClick={()=>getUsers()}>
                <Box>
                    <Image src={user.picture} alt="dp" />
                </Box>
                <Text>
                    <Typography>{user.name}</Typography>
                </Text>
                <AcitveUserIcon>{activeUsers?.find(users => users.sub === user.sub) ? <RssFeedIcon /> : ''}</AcitveUserIcon>
            </Wrapper>
           
        </>
    )
}

export default UserConvertion;
