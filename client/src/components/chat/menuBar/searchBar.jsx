import { Box, styled } from "@mui/material"
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Component = styled(Box)`
background-color:#fff;
border-bottom:1px solid #f2f2f2;
display:flex;
align-items:center;

`
const Wrapper = styled(Box)`
background-color:#f0f2f4;
position:relative;
margin:5px 13px;
width:100%;
border-radius:10px;

`
const Icon = styled(Box)`
position:absolute;
padding:6px 10px;
height:100%;
color:#919191;


`
const InputField = styled(InputBase)`
width:100%;
padding:16px;
padding-left:65px;
height:15px;
font-size:14px;
color:black;
`


const SearchBar = ({ setText }) => {

    return (

        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon fontSize="small" />
                </Icon>
                <InputField placeholder="Search or start new chat"

                    onChange={(e) => setText(e.target.value)}
                />
            </Wrapper>
        </Component>
    )
}

export default SearchBar;