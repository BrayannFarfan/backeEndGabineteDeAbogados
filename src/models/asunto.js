import { DataTypes } from "sequelize";
import { sequelize } from "../dataBase/config.js"; 
import { Usuario } from "./user.js";
import { Procurador } from "./procurador.js";


export const Asunto = sequelize.define('Asunto', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo:{
        type: DataTypes.STRING
    },
    fechaInicio:{
        type: DataTypes.STRING
    },
    fechaFinal:{
        type: DataTypes.STRING
    },
    estado:{
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.STRING
    }
},{
    timestamps: false
})



Asunto.belongsTo(Usuario,{ foreignKey: 'usuariosId'});
Usuario.hasOne(Asunto,{ foreignKey: 'usuariosId'});

Asunto.hasMany(Procurador,{foreignKey: 'asuntoId'});
Procurador.belongsTo(Asunto,{foreignKey: 'asuntoId'});

await Usuario.sync();
await Asunto.sync();
await Procurador.sync();