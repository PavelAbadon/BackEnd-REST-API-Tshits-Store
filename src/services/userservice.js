import User from "../models/User.js";

export async function register(username, email, password) {
    return User.create({username, email, password});
}

