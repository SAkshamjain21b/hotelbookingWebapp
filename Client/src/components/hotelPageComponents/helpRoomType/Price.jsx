import React, { useState } from "react";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Link } from "react-router-dom";



function Price(props) {
    const data = props;
    console.log("in price.jsx", data);
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
                        <Link to="/table" state={{ data }}> Select Room </Link>
                        {/* <Button component={Link} to="/table" varient="contained" color="primary" >Select Room</Button> */}
                    </div>
                </div>
            </Card>
        </div>
    )
}


export default Price;