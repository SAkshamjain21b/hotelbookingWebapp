import React from "react";
import DateArea from "./helpingComponents/DateArea";
import InputArea from "./helpingComponents/InputArea";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';




function AskCard() {
    return (<div className="flex-container3" >
        <h3>Book Hotels and HomeStays</h3>
        <div >

            <Card sx={{ maxWidth: 400 }} className="AskCard" >
            <InputArea name="Where ?" />
            <br />
            <DateArea name="Check-in Date" />
            <br />
            <DateArea name="Check-out Date" />
                <br />
                <Button variant="contained">Contained</Button> {/* here i have to do a db find to search by location */}
        </Card>
        </div>

       


    </div>);
}

export default AskCard;



