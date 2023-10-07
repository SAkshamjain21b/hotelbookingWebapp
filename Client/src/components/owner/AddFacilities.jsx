import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


function AddFacilities(props) {
    return (
        <div>
        <FormGroup>
            <h2>Please check the ones you give with your rooms only package</h2>
            <FormControlLabel control={<Checkbox name="refundable" onChange={props.func} />} label="refundable" />
            <FormControlLabel control={<Checkbox name="meals" onChange={props.func}  />} label="Meals" />
            <FormControlLabel control={<Checkbox name="welcomeDrink" onChange={props.func}  />} label="welcome Drink" />
            <FormControlLabel control={<Checkbox name="breakfast" onChange={props.func} />} label="breakfast" />
            <FormControlLabel control={<Checkbox name="vodkaShots" onChange={props.func} />} label="vodka Shots" />
            <TextField  name="roomPrice" onChange={props.func2} label="price for this kind of room" variant="standard" />
            <TextField  name="roomTax" onChange={props.func2} label="Tax on this kind of room" variant="standard" />
            </FormGroup>
                <Button variant="contained" onClick={props.func6} >Click after Setting above data</Button>
        </div>
    )
}

export default AddFacilities;