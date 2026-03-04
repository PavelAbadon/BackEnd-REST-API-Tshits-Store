import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export async function register(username, email, password) {
    return User.create({username, email, password});
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

    const payload = {
        id: user.id,
        email: user.email,
        username: user.username
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' });

    return {
        _id: user.id,
        email: user.email,
        username: user.username,
        accessToken: token
    };
}

