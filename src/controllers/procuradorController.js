import { Procurador } from '../models/procurador.js'

export const getAllProcuradors = async (req, res ) =>{
    try {   
        const getAllProcuradors = await Procurador.findAll();
        res.status(200).json({data: getAllProcuradors}) 
    } catch (error) {
        res.status(500).json({error: error.mesagge});
    }
}

export const createOneProcurador = async (req, res) =>{

        const { name, lastName, direccion, dni, email, genero, asuntoId} = req.body;

    try {
        const createProcurador = await Procurador.create({
            name,
            lastName,
            direccion,
            dni,
            email,
            genero,
            asuntoId
        })
        res.status(201).json({data: createProcurador});
    } catch (error) {
        res.status(500).json({error: error.mesagge});
    }
}

export const  getOneProcurador = async ( req, res ) =>{
    const { id } =  req.params;
    try {
        const getProcurador = await Procurador.findByPk(id);
            res.status(200).json({data: getProcurador});
    } catch (error) {
        res.status(500).json({error: error.mesagge});
    }
}

export const updateProcurador = async (req, res) =>{
    const { id } = req.params;
    try {
        const updateProcurador = await Procurador.findByPk(id);
        updateProcurador.set(req.body);
        await updateProcurador.save();
        res.status(200).json({data: updateProcurador});    
    } catch (error) {
        res.status(500).json({error: error.mesagge})
    }
}

export const deleteProcurador = async ( req, res) =>{
    const { id } = req.params;
    try {
        const deleteProcurador = await Procurador.destroy({
            where:{
                id
            }
        })
        res.status(200).json({data: deleteProcurador});
    } catch (error) {
        res.status(500).json({error: error.mesagge});
    }
}