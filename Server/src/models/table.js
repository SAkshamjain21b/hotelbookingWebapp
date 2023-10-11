import mongoose from "mongoose";

let Schema = mongoose.Schema;

export const tableSchema = new Schema({
    hotelId : String,
    userId:String,
    roomId:String,
    roomOccupied:Number,
    startDate:Date,
    endDate:Date
});