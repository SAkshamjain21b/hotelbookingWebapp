import React from "react";
import ImagePart from "./helpingComponents/ImagePart";
import Card from '@mui/material/Card';


function HotelCard() {
    return ( 
        <div className="hotelCard" >
            <Card style={{ border: "1px solid black", borderRadius: "20px"} } >
            <ImagePart />
        </Card>
        </div>
    );
}

export default HotelCard;