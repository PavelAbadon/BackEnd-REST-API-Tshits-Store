import { Router } from "express";
import { tshirtService } from "../services/index.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { isAdmin } from "../middlewares/isAdmin.js";


const tshirtController = Router();

// Create T-shirt for ADMIN
tshirtController.post('/', requireAuth, isAdmin, async(req, res) =>{
    const tshirtData = req.body;

    try {
        const tshirt = await tshirtService.createTshirt(tshirtData);
        res.status(201).json(tshirt);
        
    } catch (err) {
        res.status(403).json({ error: err.message });
    }
    
});

//Edit Tshirt for Admin
tshirtController.put('/:tshirtId', requireAuth, isAdmin, async(req, res) =>{
    const tshirtId = req.params.id;
    const tshirtData = req.body;

    try {
        const tshirt = await tshirtService.editTshirt(tshirtId, tshirtData);
        res.status(204).json(tshirt);
    } catch (err) {
        res.status(403).json({ error: err.message });
    }
})

//Get All for EveryOne
tshirtController.get('/', async (req, res) => {
    try {
        const tshirts = await tshirtService.getAllTshirts();
        res.json(tshirts);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//Get One for everyOne
tshirtController.get('/:tshirtId', async (req, res) =>{
    const tshirtId = req.params.id;
    
    try {
        const tshirt =  await tshirtService.getOne(tshirtId);
        res.json(tshirt);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }

});


export default tshirtController;