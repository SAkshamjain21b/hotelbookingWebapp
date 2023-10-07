import mongoose from "mongoose";
import {userSchema} from "../models/user.js";

const User = mongoose.model("User",userSchema);

export const auths = async(req,res,next)=>{

    // if(req.body.Name === ""){
    //     console.log("handle Login");
    // }else{

    //     console.log("handle signup");
    // }
    console.log("in user.js controller ",req.body);
}

// export default router;


// export const signin = async(req,res)=>{
//     const {email,password} = req.body;

//     try {
//         const existingUser = await User.findOne({email});
//         if(!existingUser){
//             return res.status(404).json({message:"User does'nt exist."});
//         }
//         const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);
//         if(!isPasswordCorrect){
//             return res.status(400).json({message:"Invalid Password"});
//         }
//         const token = jwt.sign({email:existingUser.email,id:existingUser._id},'test',{expiresIn:"1h"});
//         res.status(200).json({result:existingUser,token});
//     } catch (error) {
//         res.status(500).json({message:"something went wrong"});   
//     }
// }


// export const signup = async(req,res)=>{
//     const {email,password,name,confirmPassword} = req.body;
    
//     try {
//         const existingUser = await User.findOne({email});
//         if(existingUser){
//             return res.status(400).json({message:"User already Exist."});
//         }
//          if(password != confirmPassword){
//             return res.status(400).json({message:"Passswords does'nt match"});
//          }
//          const hashedPassword =  await bcrypt.hash(password,12);

//          const result = await userSchema.create({email,password:hashedPassword,name,});
//         const token = jwt.sign({email:result.email,id:result._id},'test',{expiresIn:"1h"});
//         res.status(200).json({result,token});

//     } catch (error) {
//         res.status(500).json({message:"Something went Wrong"});
//     }
// }


