import { Router } from "express";
import { tshirtService } from "../services/index.js";


const tshirtController = Router();

// Create T-shirt
tshirtController.post('/', async(req, res) =>{
    //ТУК ЩЕ ТРЯБВА ДА ИМА try/catch
    const tshirtData = req.body;
    const tshirt = await tshirtService.createTshirt(tshirtData);

    res.status(201).json(tshirt);
});

//Get All// не знам дали ми трябва да взимам всички тениски след като ще ползваме в Реакта TSHIRT-CARD !!!! НО ЗА ВСЕКИ СЛУЧАЙ СЕДИ ТУК
tshirtController.get('/', async (req, res) => {
    try {
        const tshirts = await tshirtService.getAllTshirts();
        res.json(tshirts);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//Get One
tshirtController.get('/:tshirtId', async (req, res) =>{
    const tshirtId = req.params.id;
    
    try {
        const tshirt =  await tshirtService.getOne(tshirtId);
        res.json(tshirt);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }

})

export default tshirtController;