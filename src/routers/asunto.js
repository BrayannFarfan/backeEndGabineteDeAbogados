import { Router } from "express";
import { getALLAsunts,createAsunts,getOneAsunto, updateAsunto,deleteAsunto } from "../controllers/asuntoController.js";

export const asuntoRouter = Router();


asuntoRouter.get('/' , getALLAsunts);
asuntoRouter.post('/createAsunto', createAsunts);
asuntoRouter.get('/:id',getOneAsunto);
asuntoRouter.put('/updateAsunto/:id', updateAsunto);
asuntoRouter.delete('/deleteAsunto/:id',deleteAsunto );