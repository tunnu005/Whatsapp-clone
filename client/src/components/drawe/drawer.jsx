import { Drawer,Typography,Box,styled } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from "./profile";


const DraweStyle ={
    left:20,
    top:17,
    width:'30%',
    height:'95%',
    boxShadow:'none'

}

const Header=styled(Box)`
background:#008069;
color:#FFFFFF;
height:112px;
display:flex;
& > svg,& > p {
    margin-top:auto;
    padding:15px;
    font-weight:500;
   


}
& > p{
    font-size:18px;
}
`
const Component = styled(Box)`
background:#ededed;
height:85%;

`

const Infodrawer = ({open,SetOpendrawer}) =>{


   


        const handleClose = () =>{
                SetOpendrawer(false)
        }
    return(
        <div>
            <Drawer 
                open={open}
                onClose={handleClose}
                PaperProps={{sx:DraweStyle}}
                style={{zIndex:1500}}
            >
               <Header>
                    <ArrowBackIcon onClick={()=>{SetOpendrawer(false)}} />
                    <Typography>Profile</Typography>

               </Header>
               <Component>
                    <Profile />
               </Component>
            </Drawer>
        </div>
    )
}

export default Infodrawer;