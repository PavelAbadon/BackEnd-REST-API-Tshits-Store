import { Router } from "express";


const userController = Router();

//Register
userController.post('/register', async (req, res) =>{
    const {username, email, password} = req.body;

    res.end();
})



export default userController;