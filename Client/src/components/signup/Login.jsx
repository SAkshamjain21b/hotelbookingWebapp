import React, { useState } from "react";
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import Password from "../helpingComponents/Password";
import Username from "../helpingComponents/Username";




function Login() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function handleChange(e) {
        console.log(e.target.value);
    }
    function handleChangePassword(e) {
        console.log(e.target.value);
    }

    return (<div>
        <Username func1={handleChange} />
        <p> <strong>Password:</strong></p><Password func1={handleChangePassword} />
        <p className="google"><span>login using Google</span></p>
        <GoogleIcon style={{ position: "absolute", left: "50%" }} />
        <br /><br />
        <Button variant="contained">Submit</Button>

    </div>
    );
}

export default Login;