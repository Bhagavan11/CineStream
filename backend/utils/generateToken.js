import jwt from "jsonwebtoken"
import { ENV_VARS } from "../config/envVars.js"

export const generateTokenAndSetCookie=(userId,res)=>{
    console.log("Generating token for user:", userId);  // Log for debugging purposes
    const token=jwt.sign({userId},ENV_VARS.JWT_SECRET,{expiresIn:"15d"})
    res.cookie("jwt-netflix",token,{
        httpOnly:true,
        maxAge:1000*60*60*24*15,
        sameSite:"strict",//csrf prevention
        secure:ENV_VARS.NODE_ENV!="development", //for https only
    })
    return token
}
