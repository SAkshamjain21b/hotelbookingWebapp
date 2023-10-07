import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { color, textAlign } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';

function PricingCard(props) {

    return (
        <div>
            <Card sx={{ bgcolor:'#D2E9E9', textAlign:'left' }} >
                <div className="priceCard1">
                    <h3><CurrencyRupeeIcon />{props.data.price}</h3> 
                    <p style={{ color: "#9DB2BF" }} ><AddIcon fontSize="small" /><CurrencyRupeeIcon fontSize="small" />{props.data.tax} taxes and fees per Night</p>
            </div>
            </Card>
        </div>
    );
}

export default PricingCard;