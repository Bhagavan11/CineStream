import jwt from "jsonwebtoken"
import { ENV_VARS } from "../config/envVars.js"

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "15d" });
  
    res.cookie("jwt-netflix", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 15,
        sameSite: "None",     // 👈 Required for cross-site cookies
        secure: true          // 👈 Required for HTTPS (like Render & Vercel)
      });
  
    return token;
  };
