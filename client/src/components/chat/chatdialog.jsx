
import { Dialog ,Box,styled} from "@mui/material"
import Menu from './menuBar/menu'
import EmptyChat from './emptyChat/emptychat'
import ChatBox from "./chatBox/chatBox"
import { useContext } from "react"
import { AccountContext } from "../../context/AccountProvider"

const dialogstyle={
    height:'95%',
    width:'100%',
    margin:'20px',
    borderRadius:0,
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden',
    


}

const Comp = styled(Box)`
    display:flex
`
const LeftComp = styled(Box)`
    min-width:450px;
`
const RightComp = styled(Box)`
    width:73%;
    min-width:300px;
    height:100%;
    border-left:1px solid rgba(0,0,0,0.14)
    
`

const ChatDialog = () =>{

    const { person } = useContext(AccountContext)

    
    
    return(
        <Dialog
        open={true}
        PaperProps={{sx:dialogstyle}}
        hideBackdrop={true}
        maxWidth={'md'}
        >

        <Comp>
            <LeftComp>
                <Menu />
            </LeftComp>
            <RightComp>
                {
                    Object.keys(person).length ? <ChatBox /> : <EmptyChat />
                }
            </RightComp>
        </Comp>

        </Dialog>
    )
}

export default ChatDialog