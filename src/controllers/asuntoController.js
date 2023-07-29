import { Asunto } from '../models/asunto.js'
import { Procurador } from '../models/procurador.js';
import { Usuario } from '../models/user.js';

export const getALLAsunts = async (req, res) =>{
    try {
        const getALLAsunts = await Asunto.findAll({
            include:[
                {
                    model:Usuario
                },
                {
                    model: Procurador
                }
            ]
        })
        res.status(200).json({data: getALLAsunts})
    } catch (error) {
        res.status(500).json({error : error.message});
    }
}

export const createAsunts = async (req , res) =>{
    const { titulo, fechaInicio, fechaFinal, estado,descripcion, usuariosId, procuradoreId } = req.body;
    try {
        const newAsunt = await Asunto.create({
            titulo,fechaInicio, fechaFinal, estado, descripcion, usuariosId, procuradoreId
        })
        res.status(200).json({data: newAsunt})
    } catch (error) {
        res.status(500).json({error : error.message});
    }
}

export const getOneAsunto = async (req , res) =>{
    const { id } = req.params;
    try {
        const getAsunto = await Asunto.findByPk(id, {
            include:[
                {
                    model:Usuario
                },
                {
                    model: Procurador
                }
            ]
        });
        res.status(200).json({data:getAsunto})
    } catch (error) {
        res.status(500).json({error : error.message});
    }
}

export const updateAsunto = async (req, res)=>{
    const { id } = req.params;
    try {
        const updateAsunto = await Asunto.findByPk(id)
        updateAsunto.set(req.body)
        await updateAsunto.save()
        res.status(200).json({data: updateAsunto})
    } catch (error) {
        res.status(500).json({error : error.message});
    }
}

export const deleteAsunto = async (req, res ) =>{
    const { id } = req.params;
    try {
        const deleteAsunto = await Asunto.destroy({
            where:{
                id
            }
        })
        res.status(200).json({data:deleteAsunto})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}