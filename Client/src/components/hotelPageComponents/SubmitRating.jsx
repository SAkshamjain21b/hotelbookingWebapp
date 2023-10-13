import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postReview } from "../../features/hotel/hotelSlice";
// import Rating from '@mui/material/Rating';


function SubmitReview(props) {
    
    const initialState = { content:"",userRating:0,userId:"",hotelId:""}
    const [value, setValue] = React.useState(2);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    
    
    formData.hotelId = props.data._id;
    
    
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postReview(formData));
    }
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    }
    
    return (
        <Card sx={{ minWidth: '400' }}>
            <CardContent>
                <h4>Give Your Valuable Ratings : </h4>
                <form onSubmit={handleSubmit}>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setFormData({ ...formData, userRating: newValue });
                            console.log(newValue);
                        }}
                    />
                    <TextField name="content" label="Please Give your Review " onChange={handleChange} variant="outlined" fullWidth  />
                    <Button type="submit" variant="contained" >Submit</Button>
                </form>
            </CardContent>
        </Card>
    );
}

export default SubmitReview;