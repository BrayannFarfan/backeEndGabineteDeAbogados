import  { sequelize }  from "./dataBase/config.js";


try {
    await sequelize.authenticate();
    console.log('conectado a la base de datos');
} catch (error) {
    console.log(`error: ${error.message}`);
}