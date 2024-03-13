import { Box ,styled} from "@mui/material"
import { useContext,useState } from "react"
import { AccountContext } from "../../../context/AccountProvider"
import ChatIcon from '@mui/icons-material/Chat';
import MenuField from "./MenuFlild";
import Infodrawer from "../../drawe/drawer";

const Component = styled(Box)`
height:44px;
padding:8px 16px;
background:#ededed;
display:flex;
align-items:center;
`

const Image=styled('img')({
height:40,
width:40,
borderRadius:'50%'
})

const Wrapper=styled(Box)`
margin-left:auto;
& > *{
    margin-left:2px;
    padding:8px;
    color:#000;

}
& :  first-child{
    margin-right:2px;
    margin-top:3px;
    font-size:22px;
}
`

const Header = () =>{

    const [open,SetOpendrawer]=useState(false);
    const { account }= useContext(AccountContext)

   
    const toggledraawer= () =>{
        SetOpendrawer(true);
    }

    return(
        <div>
            <Component>
                <Image src={account.picture} alt="dp" onClick={toggledraawer}/> 
                <Wrapper>
                    <ChatIcon />
                    <MenuField SetOpendrawer={SetOpendrawer}/>

                </Wrapper>
                
            </Component>
            <Infodrawer open={open} SetOpendrawer= {SetOpendrawer} />
        </div>
    )
}

export default Header