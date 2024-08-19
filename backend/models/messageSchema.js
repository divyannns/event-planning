import mongoose from "mongoose";
import validator from 'validator';

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true , "Name require!"],
        minLength: [3, "name atleast contain 3 character!"],
    },
    email: {
        type: String,
        required: [true, "Email Required!"],
        validate: [validator.isEmail, "Please provide valid email!"],
      },
    subject: {
        type: String,
        required: [true , "Subject require!"],
        minLength: [5, "subject atleast contain 5 character!"],
    },
    message: {
        type: String,
        required: [true , "Message require!"],
        minLength: [10, "message atleast contain 10 character!"],
    },
});

export const Message = mongoose.model("message" , messageSchema);