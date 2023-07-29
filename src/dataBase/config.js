import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('abogados', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
})