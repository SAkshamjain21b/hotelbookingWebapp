import React from "react";
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import PlaceIcon from '@mui/icons-material/Place';
import Typography from '@mui/material/Typography';


function InfoPart(props) {
    let newRating = Math.floor(parseInt(props.rating));
    
    return (
        <div>
            <CardContent>
                <Typography variant="h5" component="div">{props.name}</Typography>
                <Box sx={{'& > legend': { m: 3 }}}>
                    <Rating name="read-only" value={newRating} readOnly />
                </Box>
                <Typography display={'flex'}><PlaceIcon /> {props.location.slice(0,65)}</Typography>
                
                
                
            </CardContent>
        </div>
    )
}

export default InfoPart;