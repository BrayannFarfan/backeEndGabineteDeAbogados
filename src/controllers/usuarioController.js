import { Usuario } from '../models/user.js'

export const getAllUser = async (req, res) =>{
    try {
        const user = await Usuario.findAll()
        res.json({data: user});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export const createUser = async (req, res) =>{
    const { name, lastName, direccion, dni, email, genero } = req.body
    try {
        const user = await Usuario.create({
            name,
            lastName,
            direccion,
            dni,
            email,
            genero
        })
        res.status(200).json({data: user})
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export const getOneUser = async  (req, res ) =>{
    const { id }  = req.params;
    try {
        const getUser = await Usuario.findByPk(id);
        res.status(200).json({data:getUser})
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export const updateUser = async (req, res ) =>{

    const { id } = req.params;
    const {name, lastName, direccion, dni, email, genero  } = req.body;

    try {
        const updateOneUser = await Usuario.update({
            name : name.trim(),
            lastName: lastName.trim(),
            direccion : direccion.trim(),
            dni: dni.trim(),
            email: email.trim(),
            genero: genero.trim()
        },{
            where:{
                id
            }
        })
        res.status(200).json({data: updateOneUser});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export const deleteUser = async ( req, res ) =>{
    const { id } = req.params;
    try {
        const deleteUser = await Usuario.destroy({
            where:{
                id
            }
        })
        res.status(200).json({data: deleteUser})
    } catch (error) {
        res.status(500).json({data: error.message})
    }
}