import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Input from './Input';
import { useDispatch } from "react-redux";
import { auth } from '../../features/auth/authSlice';





function Auth() {


    function handleSubmit(e) {
        e.preventDefault();
        {isSignup?formData.key="SignUp":formData.key="Signin"}
        dispatch(auth(formData));
    }
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    }
    function handleShowPassword(prev) {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }
    function switchMode(prev) {
        setSignup((prev) => !prev);
        // handleShowPassword(false);
    }

    const initialState = { Name: "", email: "", password: "", confirmPassword: "" ,key:""}

    const [isSignup, setSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();

    return (
        <Container component="main" maxWidth="xs">
            <Paper className="paperAuth" elevation={3} >
                <Avatar className="avatarAuth">
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>
                    {isSignup ? 'SignUp' : 'SignIn'}
                </Typography>
                <form className='formAuth' onSubmit={handleSubmit} >
                    <Grid container spacing={2}>
                        {isSignup && (<Input name='Name' lable="Name" handleChange={handleChange} autoFocus half />)}
                        <Input name='email' lable="Email-Address" handleChange={handleChange} type="email" />
                        <Input name='password' lable="password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignup && <Input name='confirmPassword' lable="Confirm Password" handleChange={handleChange} type="password" />}
                    </Grid>
                   
                    {isSignup ? <Button key="SignUp" type='submit' fullWidth variant='contained' color='primary' className='submitAuth'>"SignUp"</Button>
                        : <Button key="SignIn" type='submit' fullWidth variant='contained' color='primary' className='submitAuth'>"SignIn"</Button>}
                    <Grid container justify="flex-end" >
                        <Grid item >
                            <Button onClick={switchMode} >
                                {isSignup ? "Already have Account? SignIn" : "Don't have an Account ? SignUp"}
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;