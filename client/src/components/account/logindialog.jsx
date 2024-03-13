import {Dialog,Box,List,ListItem,Typography} from '@mui/material'
import Qrcode from '../images/download.png'
import styled from '@emotion/styled'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from '../../service/api';


const dialogstyle={
    height:'96%',
    marginTop:'12%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    overflow:'hidden',
    boxshadow:'none'


}

const Component=styled(Box)`
        display:flex;
    `
    const Container=styled(Box)`
        padding:56px 0px 56px 56px 
    `
    const QrCode=styled('img')`
        height:264px;
        width:264px;
        margin:50px 0 0 50px
    
    `

    const Title=styled(Typography)`
        font-size:26px;
        color:#525252;
        font-weidth:300;
        font-family:inherint;
        margin-bottom:25px
    `

    const Styleitem=styled(List)`
        & > li{
            padding:0;
            margin-top:15px;
            font-size:18px;
            line-height:28px;
        }
    `

const LoginDialog = (props) =>{
   

    const {setaccount} = useContext(AccountContext)
    
    const onloginsuccess=(res) =>{
        const decoded=jwt_decode(res.credential)
        setaccount(decoded);
        addUser(decoded)
    }
    const onloginerro=(err) =>{

        console.log('login fail',err)
    }

    return(
        <div>
           <Dialog open={true}
                PaperProps={{sx:dialogstyle}}
                hideBackdrop={true}
           >
             <Box>
                <Component>
                    <Container>
                        <Title>
                            To use WhatsApp on your computer
                        </Title>
                        <Styleitem>
                            <ListItem>
                                1. Open WhatsApp on your phone
                            </ListItem>
                            <ListItem>
                                2. Tap Menu setting and Select WhatsApp Web
                            </ListItem>
                            <ListItem>
                                3. Point your phone to the screen to capture the code
                            </ListItem>
                        </Styleitem>
                    </Container>
                    <Box style={{position:'relative'}}>
                        <QrCode src={Qrcode} alt="QR code" />
                        <Box style={{position:'absolute',top:'50%',transform:'translatex(25%)'}}>
                            <GoogleLogin 
                                onSuccess={onloginsuccess}
                                onError={onloginerro}
                            />
                        </Box>
                    </Box>
                </Component>
             </Box>

           </Dialog>
        </div>
    )
}

export default LoginDialog