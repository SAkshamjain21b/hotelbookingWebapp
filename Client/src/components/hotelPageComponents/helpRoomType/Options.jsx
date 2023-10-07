import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

function Options(props) {

    return (
            <Card sx={{ minHeight: '315px' }} >
                <CardContent>
                    <p><strong>props.title</strong></p>
                    <p>{(props.refundable ? <VerifiedRoundedIcon fontSize="small" color="success" /> : <CancelRoundedIcon fontSize="small" color="error" />)} Refundable</p>
                    <p>{(props.meals ? <VerifiedRoundedIcon fontSize="small" color="success" /> : <CancelRoundedIcon fontSize="small" color="error" />)} Meals</p>
                    <p>{(props.drink ? <VerifiedRoundedIcon fontSize="small" color="success" /> : <CancelRoundedIcon fontSize="small" color="error" />)} Welcome Drink</p>
                    <p>{(props.breakfast ? <VerifiedRoundedIcon fontSize="small" color="success" /> : <CancelRoundedIcon fontSize="small" color="error" />)} BreakFast</p>
                    <p>{(props.bar ? <VerifiedRoundedIcon fontSize="small" color="success" /> : <CancelRoundedIcon fontSize="small" color="error" />)} Shot of Vodka</p>
                </CardContent>
            </Card>
    );
    
}

export default Options;