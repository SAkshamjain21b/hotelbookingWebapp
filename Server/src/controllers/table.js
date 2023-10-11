import mongoose from "mongoose";
import {tableSchema} from "../models/table.js";
import express from "express";

const router = express.Router();
const Table = mongoose.model('Table',tableSchema);

export const table = async(req,res,next)=>{
    const { userID , hotelId , startDate, endDate , roomOccupied} = req.body;
    // console.log("in controllers",hotelId);
    try {
        // const newInsert = await Table.find({userID,hotelId,startDate,endDate,roomOccupied,roomID});
        // if(newInsert){
        //     return res.status(400).json({message:"This booking already exist"});
        // }
        if(startDate === endDate){
            return res.status(400).json({message:"Please Choose date correctly"});
        }
        const result = await Table.create({ userID , hotelId , startDate , endDate , roomOccupied});

        res.status(200).json({result});
    } catch (error) {
        res.status(500).json({message:"something went wrong"});
    }
}

export default router;