// Core
import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        age: Number,
        favorite: {
            type: Boolean,
            default: false
        }
    },
    {timestamps: {createdAt: 'created', updatedAt: 'modified'}}
)

export const cat = mongoose.model("cat", schema);