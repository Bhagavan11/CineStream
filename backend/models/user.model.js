import mongoose from "mongoose";    // ✅ Correct import

const userSchema = new mongoose.Schema({    // ✅ Correct schema definition
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ""
    },
    searchHistory: {
        type: Array,
        default: []
    }
});

// ✅ Export the model
export const User = mongoose.model("User", userSchema);
