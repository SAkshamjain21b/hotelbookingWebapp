import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {userSchema} from "../models/user.js";

const User = mongoose.model("User",userSchema);

export const auths = async(req,res,next)=>{

    if (req.body.key === "Signin") {
        const { email, password } = req.body;
        console.log("handle Signin", email, password);

        try {
            const existingUser = await User.findOne({email});
            if (!existingUser) {
                return res.status(404).json({ message: "User does'nt exist." });
            }
            const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
            if (!isPasswordCorrect) {
                return res.status(400).json({ message: "Invalid Password" });
            }

            const token = jwt.sign({ email: existingUser.email, id: existingUser._id, name: existingUser.name }, "test",{expiresIn:"1h"});
    
            res.status(200).json({ result:existingUser, token });


            if (existingUser) {   
                console.log("User Found",existingUser.email,existingUser.password);
            }
        }
        catch (error) {
            res.status(500).json({ message: "something went wrong" });   
        }
    }
    else {
        const { email, password, name, confirmPassword } = req.body;
        try {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: "User already Exist." });
            }
            if (password != confirmPassword) {
                return res.status(400).json({ message: "Passswords does'nt match" });
            }
            const hashedPassword = await bcrypt.hash(password, 12);

            const result = await User.create({ name, email, password: hashedPassword });
            const token = jwt.sign({ email: result.email, id: result._id, name: result.name }, "test", { expiresIn: "1h" });

            res.status(200).json({result, token });
            
        } catch (error) {
            res.status(500).json({ message: "Something went Wrong" });
        }
        console.log("handle signup");
    }
    // console.log("in user.js controller ",req.body.key);
}
