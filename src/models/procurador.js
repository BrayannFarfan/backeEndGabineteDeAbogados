import { DataTypes } from "sequelize";
import { sequelize } from "../dataBase/config.js"; 


export const Procurador = sequelize.define('Procuradores', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    },
    lastName:{
        type: DataTypes.STRING
    },
    direccion:{
        type: DataTypes.STRING
    },
    dni:{
        type: DataTypes.INTEGER
    },
    email:{
        type: DataTypes.STRING
    },
    genero:{
        type: DataTypes.STRING
    }
},{
    timestamps: false
})