import dotenv from "dotenv";
dotenv.config({ path: "./backend/config/.env" }); // Update path if needed

export const ENV_VARS = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT || 5000,
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV || "development",
    TMDB_API_KEY: process.env.TMDB_API_KEY,
};
