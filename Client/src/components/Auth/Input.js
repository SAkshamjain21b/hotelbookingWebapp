import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
// import { type } from "@testing-library/user-event/dist/type";
import React from "react";






function Input({ half, name, handleChange, lable, autoFocus, type, handleShowPassword }){
    // console.log(name , lable);
    return (
        
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                name={name}
                onChange={handleChange} 
                label={lable}
                variant="outlined"
                required
                fullWidth
                autoFocus={autoFocus}
                type={type}
                InputProps={
                    name === 'password' && {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword}>
                                    {type === "password" ? <Visibility /> : < VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    
                    }}
            />
        </Grid>
    );

}

export default Input;