import { Schema, model } from "mongoose";

const tshirtsSchema = new Schema({
    title:{
        type: String,
        required: [true, 'Title of this T-shirt is required!'],
        minLength: [3, 'Title is too short']
    },
    description:{
        type: String,
        required: [true, 'Description of this T-shirt is required!'],
        minLength: [12, 'Description is too short']
    },
    price:{
        type: Number,
        required: [true, 'Price of this T-shirt is required!'],
        min: [0, 'Price must positive num']
        },
    imageUrl:{
        type: String,
        required: [true, 'ImageUrl of this T-shirt is required!'],
        },
    //sizes: ["S", "M", "L", "XL"],
    //colors: ["black", "white"],
    //stock: [
        //{ size: "M", color: "black", quantity: 12 }
    //],
    //category,
    //createdAt
});

const Tshirt = model('T-shirt', tshirtsSchema);

export default Tshirt;