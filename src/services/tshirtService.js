import Tshirt from "../models/Tshirt.js";

//Create Tshirt
export function createTshirt(tshirtData){
    const tshirt = Tshirt.create(tshirtData);
    return tshirt;
}

//Get All tshirts
export function getAllTshirts (tshirtData){
    const tshirts = Tshirt.find(tshirtData);
    return tshirts;
}

//GetOne Tshirt
export function getOne (tshirtId){
    
    const tshirt = Tshirt.findById(tshirtId);
    return tshirt;
}