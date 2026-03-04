import { Router } from "express";
import { userService } from "../services/index.js";


const userController = Router();

//Register
userController.post('/register', async (req, res) =>{
    const {username, email, password} = req.body;
    const result = await userService.register(username, email, password);

    res.status(201).end();
})



export default userController;