import mongoose from "mongoose";

let Schema = mongoose.Schema;


export const userSchema = new Schema({
    name:{type:String,requires:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    id: { type: String },
    key:{type:String}
})