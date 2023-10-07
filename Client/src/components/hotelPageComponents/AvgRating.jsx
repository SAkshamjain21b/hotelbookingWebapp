import React from "react";
import Box from '@mui/material/Box';


function AvgRating(props) {
    return (
        <div className="flex-container8" >
            <Box  sx={{ color: 'white', borderRadius: '5px', backgroundColor: 'primary.dark', maxWidth: '60px' }} ><h4>{props.rating}</h4></Box>
            <h4 className="vg" >{props.reviews}</h4>
            <h4>Read All Reviews</h4>
        </div>
    );
}

export default AvgRating;