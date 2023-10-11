import { Button } from "@mui/base";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, useLocation } from "react-router-dom";
import { table } from "../../features/table/tableSlice";
import RoomType from "./RoomType";

function Table(props) {
    const location = useLocation();
    const hotelid = location.state.data.id;
    const roomid = location.state.data.data._id;
    console.log("in bookingTable.js",location.state.data.data);
    const initialState = { roomOccupied: "", hotelId: "", roomId: "", startDate: "", endDate: "", userId: "" };
    const price = location.state.data.price;
    const tax = location.state.data.tax;

    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();


    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        setFormData({ ...formData, hotelId: hotelid , roomId:roomid });
        dispatch(table(formData));
    }
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    



    return (<>
        <RoomType data={location.state.data.data} number={location.state.data.number}  />
        <form onSubmit={handleSubmit}>
            <TextField name="roomOccupied" type="number" label="Room Requirment" variant="outlined" fullWidth onChange={handleChange} />
            <TextField name="startDate" type="date" label="CheckIn Date" variant="outlined" fullWidth onChange={handleChange} />
            <TextField name="endDate" type="date" label="CheckOut Date" variant="outlined" fullWidth onChange={handleChange} />
            <Button type="submit" >Finalize Book</Button>
        </form>
        <h4> your Total Bill {(formData.roomOccupied)*(price + tax) }</h4>
    </>
    );
}

export default Table;