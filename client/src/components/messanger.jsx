import LoginDialog from "./account/logindialog"
import {AppBar,Toolbar,styled,Box} from '@mui/material'
import ChatDialog from "./chat/chatdialog"
import { useContext } from "react"
import { AccountContext } from "../context/AccountProvider"


const Comp = styled(Box)`
        height:100vh;
        background:#DCDCDC;
    `
    const LoginHeader=styled(AppBar)`
        height:200px;
        background-color:#00bfa5;
        box-shadow:none
    `
    const Header=styled(AppBar)`
        height:129px;
        background-color:#00bfa5;
        box-shadow:none
    `

const Messanger = () =>{

    const {account}=useContext(AccountContext)

    
    return(
       <Comp>
        {
            account ? 
            <>
                 <Header>
                    <Toolbar>

                    </Toolbar>
                </Header>
                <ChatDialog />
            </>
            :
              <>
              <LoginHeader>
                    <Toolbar>

                    </Toolbar>
                </LoginHeader>
                <LoginDialog  />
                </>
        }
       </Comp>
    )

}

export default Messanger