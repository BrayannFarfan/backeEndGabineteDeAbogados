import { Router } from "express";
import { getAllProcuradors, createOneProcurador, getOneProcurador, updateProcurador, deleteProcurador } from '../controllers/procuradorController.js'

export const procuradoresRouter = Router();

procuradoresRouter.get('/', getAllProcuradors);
procuradoresRouter.post('/createProcurador', createOneProcurador);
procuradoresRouter.get('/:id', getOneProcurador);
procuradoresRouter.put('/updateProcurador/:id', updateProcurador);
procuradoresRouter.delete('/deleteProcurador/:id', deleteProcurador);