import styled from '@emotion/styled'
import {Box, Divider, Typography} from '@mui/material'

const Component=styled(Box)`
background:#f8f9fa;
padding:30px 0;
text-align:center;
height:100vh;

`
const Container=styled(Box)`
padding:0 200px;
`
const Image=styled('img')({
width:400,
marginTop:100
})
const Title=styled(Box)`
font-size:32px;
margin:25px 0px 10px 0px;
font-family: inherit;
font-weightt:300;
color:#41525d;
`
const Subtitle=styled(Typography)`
font-size:14px;
color:#667781;
font-weight:inherit;
font-weight:400;
`
const StyleDiveder=styled(Divider)`
margin:30px 0;
opacity:0.4;
`

const EmptyChat = () =>{

   

    return(
       <Component>
            <Container>
                <Image src="https://i.gadgets360cdn.com/large/whatsapp_multi_device_support_update_image_1636207150180.jpg" alt="" />
                <Title>WhatsApp Web</Title>
                <Subtitle>Send and receive messages without keeping your phone online.</Subtitle>
                <Subtitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</Subtitle>
                <StyleDiveder />
            </Container>

       </Component>
    )
}

export default EmptyChat