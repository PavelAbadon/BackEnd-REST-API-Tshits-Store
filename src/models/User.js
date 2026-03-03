import { Schema, model } from "mongoose";

const userSchema = new Schema ({
    username: {
        type: String,
        required: [true, 'Username is required!'],
        minLength: [6, 'Username is too short']
    },
    email: {
        type: String,
        required: [true, 'User email is required!'],
    },
    password: {
        type: String,
        required: [true, 'User password is required!'],
        minLength: [6, 'Password too short']
    },
});

const User = model('User', userSchema);

export default User;