import User from "../models/User.js";
import bcrypt from 'bcrypt';

import { generateAuthToken } from "../utils/tokenUtils.js";


export async function register(username, email, password) {
    const existingUser = await User.findOne({
        $or: [
            { username },
            { email }
        ]
    });

    if (existingUser) {
        throw new Error('Username or email already exists');
    }

    const user = await User.create({username, email, password});

    const token = generateAuthToken(user);

    return {
        _id: user.id,
        email: user.email,
        username: user.username,
        accessToken: token, 
        role: user.role
    };
}

export async function login(username, password) {
    const user = await User.findOne({ username });

    if (!user) {
        throw new Error('User does not exist');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        throw new Error('The password is incorrect.');
    }

    const token = generateAuthToken(user);

    return {
        _id: user.id,
        email: user.email,
        username: user.username,
        accessToken: token, 
        role: user.role
    };
}

