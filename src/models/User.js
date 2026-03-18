import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

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
    role: { 
        type: String, 
        enum: ['customer', 'admin'], 
        default: 'customer' 
    },
});

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 12);
});

const User = model('User', userSchema);

export default User;