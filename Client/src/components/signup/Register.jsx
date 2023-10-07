import React, { useState } from "react";
import { auth } from "../../features/auth/authSlice";
import Button from '@mui/material/Button';
import Password from "../helpingComponents/Password";
import Username from "../helpingComponents/Username";
import GoogleIcon from '@mui/icons-material/Google';
import { useDispatch } from "react-redux";


function Register({ setToken }) {

    const dispatch = useDispatch();

    const initialState = {
        newUser: {
            userName: "",
            userPassword: "",
        }
    }





    const [data, setData] = useState(initialState);
    const [cnfPassword, setCnfPassword] = useState(" ");
    function handleChange(e) {
        setData(prev => ({ ...prev, newUser: { ...prev.newUser, userName: e.target.value } }));  // here setting userName provided by the user 
    }
    function handleChangePassword(e) {
        setData(prev => ({ ...prev, newUser: { ...prev.newUser, userPassword: e.target.value } })); // here setting userPassword provided by the user
    }
    function handleChangePassword1(e) {
        setCnfPassword(e.target.value);
    }
    const handleClick2 = () => {
        if (data.newUser.userPassword === cnfPassword) {  // confirming that the password and coinfirm password does match if does'nt error will be displayed
            dispatch(auth(data)) // dispatching the postUser we made in authSlice which will transfer data to the Server side
                .then((response) => {
                    console.log("data posted succesfully");
                    console.log(data);
                    setData(initialState); // again setting the initial State of the data for a fresh start
                })
                .catch((error) => {
                    console.log("error occured while posting user");
                })
        } else {
            console.log("your given password does'nt match");
        }
    }

    return (
        <div>
            <Username func1={handleChange} />
            <p><strong>Password:</strong></p> <Password func1={handleChangePassword} />
            <p><strong>confirm Password:</strong></p><Password func1={handleChangePassword1} />
            <p className="google"><span>Register using Google</span></p>
            <GoogleIcon style={{ position: "absolute", left: "50%" }} />
            <br /><br />
            <Button variant="contained" onClick={handleClick2} >Submit</Button>
        </div>

    );
}



// Register.prototype = {
//     setToken:PropTypes.func.isRequired
// }

export default Register;