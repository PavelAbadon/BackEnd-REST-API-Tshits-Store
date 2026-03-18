import { Router } from "express";

import userController from "./controllers/userController.js";
import tshirtController from "./controllers/tshirtController.js";


const routes = Router();

routes.use('/users', userController);
routes.use('/data/catalog', tshirtController);

//checking if the admin role is working
 

export default routes;