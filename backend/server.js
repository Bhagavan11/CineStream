import express from "express"
import cookieParser from "cookie-parser"
import authRoute from "./routes/auth.route.js"
import { ENV_VARS } from "./config/envVars.js"
import { connectDB } from "./config/db.js"
import movieRoute from "./routes/movie.route.js"
import tvRoutes from "./routes/tv.route.js"
import searchRoutes from "./routes/search.route.js"
import cors from 'cors'


const app=express()
app.use(cors({
  origin: ['http://localhost:5173', 'https://cine-stream-4q9u.vercel.app'],
  credentials: true
}));


import { protectRoute } from "./middleware/protectRoute.js"


const port=ENV_VARS.PORT

app.use(express.json())//allows us  to parse the req.body

app.use(cookieParser())
app.use("/api/v1/auth",authRoute)
app.use("/api/v1/movie",protectRoute,movieRoute)
app.use("/api/v1/tv",protectRoute,tvRoutes)
app.use("/api/v1/search",protectRoute,searchRoutes)

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
    connectDB()
})  



