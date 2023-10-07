import React, { useState } from "react";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';


function Price(props) {
    return (
        <div>
            <Card sx={{ minHeight: '315px' }} >
                <div className="flex-container6">
                    <div>
                        <p>per Night</p>
                        <h4><strong><CurrencyRupeeRoundedIcon />{props.price}</strong></h4>
                        <p><AddRoundedIcon fontSize="small" /><CurrencyRupeeRoundedIcon fontSize="small" />{props.tax} taxes and fees</p>
                    </div>
                    <div>
                        <Button variant="contained">Select Room</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}


export default Price;