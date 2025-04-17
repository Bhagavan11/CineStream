import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";    // ✅ Correct import path
   // ✅ Match the actual file name


export const connectDB=async ()=>{
    try{
        const conn=await mongoose.connect(ENV_VARS.MONGO_URI)
        console.log("MONGODB CONNECTED:"+conn.connection.host)
    }
    catch(error)
    {
        console.log("ERROR CONNECTING TO MONGODB"+error.message)
        process.exit(1) //1 means there was an error ,0 means sucess
    }
}