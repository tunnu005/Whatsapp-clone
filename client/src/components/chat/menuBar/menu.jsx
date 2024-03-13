
import { Box } from "@mui/material";
import Header from "./header";
import SearchBar from "./searchBar";
import Conversation from "./conversation";
import { useState } from "react";


const Menu = () =>{

    const [text,setText]=useState('');
    return(
        <Box>
            <Header />
            <SearchBar setText={setText}/>
            <Conversation text={text}/>
        </Box>        
    )
}

export default Menu;