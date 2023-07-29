import express  from "express";
import { asuntoRouter } from './routers/asunto.js';
import { usuariosRouter } from './routers/usuario.js';
import { procuradoresRouter } from './routers/procurador.js'
import './app.js';
import  './models/asunto.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use('/asuntos', asuntoRouter);
app.use('/usuarios', usuariosRouter);
app.use('/procuradores', procuradoresRouter);

app.listen( PORT  ,  () =>{
    console.log(`servirdo corriendo en el puerto ${PORT}`);
})


