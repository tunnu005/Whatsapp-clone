import { Box, InputBase } from "@mui/material"
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicIcon from '@mui/icons-material/Mic';
import styled from "@emotion/styled";
import { useEffect } from "react";
import { uploudFile } from "../../../service/api";


const Container = styled(Box)`
height:55px;
background:#ededed;
display:flex;
width:100%;
align-items:center;
padding:0 15px;
& > *{
    margin:5px;
    color:#919191;
}
`
const Search=styled(Box)`
background-color:#FFFFFF;
border-radius:18px;
width:calc(94% - 100px);
`

const InputField = styled(InputBase)`
width:100%;
padding:20px;
height:20px;
padding-left:25px;
font-size:14px;
`
const Clipflip = styled(AttachFileOutlinedIcon)`
transform:rotate(40deg);
`



const Footer = ({ sendText,setvalue,value,file,setfile,setImage }) =>{

    const onfilechnage = (e) =>{
        setfile(e.target.files[0]);
        setvalue(e.target.files[0].name)
        
    }

    useEffect(()=>{
        const getImage = async() =>{
            if(file){
                
                const data = new FormData();
                data.append("name",file.name)
                data.append("file",file);

                console.log('file : ',data)
                
                
               const responce =  await uploudFile(data);
               setImage(responce.data);
             }
            
        }
        getImage();
    },[file])

    return(

        <Container>
            <EmojiEmotionsOutlinedIcon />
            <label htmlFor="fileInput">
                <Clipflip />
            </label>
            <input type="file" id="fileInput" style={{display:'none'}}
                onChange={(e)=>{onfilechnage(e)}}
            />
            <Search>
                <InputField  placeholder="type a message" 
                    onChange={(e)=>setvalue(e.target.value)}
                    onKeyPress={(e)=> sendText(e)}
                    value={value}
                />
            </Search>
            <MicIcon />
            

        </Container>
    )
}

export default Footer;