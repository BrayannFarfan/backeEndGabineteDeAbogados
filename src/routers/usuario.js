import { Router } from "express";
import {  getAllUser, createUser, getOneUser, updateUser, deleteUser } from '../controllers/usuarioController.js';

export const usuariosRouter = Router();

usuariosRouter.get('/', getAllUser);
usuariosRouter.get('/:id', getOneUser);
usuariosRouter.post('/createUser', createUser);
usuariosRouter.put('/updateUser/:id', updateUser);
usuariosRouter.delete('/deleteUser/:id', deleteUser);