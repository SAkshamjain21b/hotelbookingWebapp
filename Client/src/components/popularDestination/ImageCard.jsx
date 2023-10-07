import React from "react";
import Card from '@mui/material/Card';


function ImageCard(props) {


    return (
            <Card sx={{ maxWidth: 200 }}  >
        <div style={{backgroundImage : `url(${props.image})`}} className="popuDest" >          
            <h3>{props.cityName}</h3>
            <p>{props.info}</p>
        </div>
            </Card>
    );
}

export default ImageCard;