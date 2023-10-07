import React, { useState } from "react";
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Login from "./Login";
import Register from "./Register";
import Button from '@mui/material/Button';


function Signup() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    

    

    const [who, setWho] = useState(false); // here who is for who is login in customer or owner.
    

    
    function handleWho1() {setWho(false);}
    function handleWho2() { setWho(true); }





    return (
        <Box sx={style}>
            <div className="flex-container5">
            <ToggleButtonGroup>
                <ToggleButton onClick={handleWho1} >Login</ToggleButton>
                    <ToggleButton onClick={handleWho2} >Register</ToggleButton>
            </ToggleButtonGroup>
            </div>
            {who ? <Register /> : <Login />}
            
        </Box>
    );
}

export default Signup;