import { Router } from "express";
import { tshirtService } from "../services/index.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { isAdmin } from "../middlewares/isAdmin.js";


const tshirtController = Router();

// Create T-shirt
tshirtController.post('/', requireAuth, isAdmin, async(req, res) =>{
    //ТУК ЩЕ ТРЯБВА ДА ИМА try/catch
    const tshirtData = req.body;
    const tshirt = await tshirtService.createTshirt(tshirtData);

    res.status(201).json(tshirt);
});

//Get All
tshirtController.get('/', requireAuth, isAdmin, async (req, res) => {
    try {
        const tshirts = await tshirtService.getAllTshirts();
        res.json(tshirts);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//Get One
tshirtController.get('/:tshirtId', requireAuth, isAdmin, async (req, res) =>{
    const tshirtId = req.params.id;
    
    try {
        const tshirt =  await tshirtService.getOne(tshirtId);
        res.json(tshirt);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }

})

export default tshirtController;