import { Router } from "express";
import { tshirtService } from "../services/index.js";


const tshirtController = Router();

// Create T-shirt
tshirtController.post('/', async(req, res) =>{
    const tshirtData = req.body;
    const tshirt = await tshirtService.createTshirt(tshirtData);

    res.status(201).json(tshirt);
});

//Get All
tshirtController.get('/', async (req, res) => {
    try {
        const tshirts = await tshirtService.getAllTshirts();
        res.json(tshirts);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default tshirtController;