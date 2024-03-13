import { Box,styled,Typography } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const Boxwrapper=styled(Box)`
background:#FFFFFF;
padding:12px 30px 2px;
box-shadow:0 1px 3px rgba(0,0,0,0.08);
& : first-child{
    font-size:13px;
    color:#009688;
    font-weidth:200;
}
& : last-child
{
    margin:14px 0;
    color:#4A4A4A;
}
   

`
const DescriptionCotainer=styled(Box)`
 margin:1px 20px 28px 30px;
 & > p{
    font-size:13px;
    color:#8696a0;
 }
` 
const ImageContainer= styled(Box)`
display:flex;
justify-content:center;

`
const Image=styled('img')({
width:200,
height:200,
borderRadius:'50%',
padding : '25px 0px'

})

const Profile = () => {

   
    const { account } = useContext(AccountContext)


  


    return (

        <div>
            <ImageContainer>
                <Image src={account.picture} alt="dp"  />
            </ImageContainer>
            <Boxwrapper>
                <Typography>Your name</Typography>
                <Typography>{account.name}</Typography>
            </Boxwrapper>
            <DescriptionCotainer>
                <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
            </DescriptionCotainer>
            <Boxwrapper>
                <Typography>About</Typography>
                <Typography>Eat sleep fuck</Typography>
            </Boxwrapper>
        </div>
    )
}

export default Profile;