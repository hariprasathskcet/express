import express from "express";
const route=express.Router();
import { create, fetch, update } from '../Controller/userController.js';

route.post("/create",create);
route.get('/fetch',fetch);
route.put('/update/:id',update);


export default route;