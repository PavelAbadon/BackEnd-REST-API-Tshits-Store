import { Router } from "express";
import { userService } from "../services/index.js";


const userController = Router();

//Register
userController.post('/register', async (req, res) =>{
    const {username, email, password} = req.body;
    
    try{
        const result = await userService.register(username, email, password);
        res.status(201).json(result);

    }catch(err) {
        res.status(401).json({ message: err.message })
    }
});

//Login
userController.post('/login', async (req, res) =>{
    const {username, password} = req.body;
    

    try {
        const result = await userService.login(username, password);
        res.status(201).json(result);

    } catch (err) {
        res.status(401).json({ message: err.message });
    }
});

//Logout
userController.get('/logout', async(req, res) => {
    res.status(204).end();
})



export default userController;