import React from "react";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GradeIcon from '@mui/icons-material/Grade';
import Box from '@mui/material/Box';





function InfoPart(props) {
    // console.log(props.data[0].ratings);

    return ( <div className="infoCard" >
        <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
                <Box sx={{color: '#1D5D9B'}} >
                <Box sx={{ border: '1px', display: 'inline- flex', flexDirection: 'column', flexWrap: 'wrap', bgcolor: '#1D5D9B', color: '#FFF0F5' , margin:'5px 20px' }}>
                    {props.data.ratings}
                <GradeIcon />
                </Box>
                    {props.data.reviews}
                </Box>
                <br />
                <h3>
                {props.data.name}
                </h3>
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                <Box sx={{ display: 'inline-flex' }} >
                    <p>
                        {props.data.discription}
                    </p>
                </Box>
            </Typography>
        </CardContent>
    </div> );

}

export default InfoPart;