import mongoose from 'mongoose';
import { hotelSchema } from '../models/hotel.js';
import express from "express";
// import multer from "multer";

// const upload = multer({ dest: 'uploads/' });
const router = express.Router();
const Hotel = mongoose.model('Hotel', hotelSchema);


export const getAllxHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json({ data: hotels });
    } catch (error) {
        console.log("Error fetching hotels:", error);
        res.status(500).json({ error: "An error occurred while fetching hotels." });
    }
}
export const postHotel = async (req, res,next) => {
    let a = req.body.postHotelItems;
    let newPost = new Hotel(a);

    try {
        console.log(newPost);
        const createdHotel = await newPost.save();
        res.status(200).json({ data: createdHotel });
        // next();
    } catch (error) {
        console.log("Error posting hotels:", error);
        res.status(500).json({ error: "An error occurred while posting hotels." });
        // next();
    }
}

export default router;