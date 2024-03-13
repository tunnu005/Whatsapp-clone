import { MoreVert } from "@mui/icons-material"
import { useState } from "react"
import { MenuItem } from "@mui/material"
import Menu from '@mui/material/Menu';
import styled from "@emotion/styled";

const MenuOption=styled(MenuItem)`
font-size:14px;
padding:15px 60px 5px 24px;
color:#4A4A4A;
`

const MenuField = ({SetOpendrawer}) => {

    const [open,Setopen] = useState(null)
    const handleClick=(e)=>{
        Setopen(e.currentTarget)
    }
    const handleClose=()=>{
        Setopen(null)
    }

   

    

    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
               
                anchorEl={open}
                keetMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'center'
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal:'right'
                }}

            >
                <MenuOption onClick={()=>{handleClose(); SetOpendrawer(true);}}>Profile</MenuOption>
                <MenuOption onClick={handleClose}>My account</MenuOption>
                <MenuOption onClick={handleClose}>Logout</MenuOption>
            </Menu>
        </>
    )
}

export default MenuField