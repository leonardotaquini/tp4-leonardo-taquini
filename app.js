import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import appRoutes from "./routes/appRoutes.js";

const app = express();

//Configuracion del puerto.
const puerto =  process.env.PORT || 6000;

//Configuracion de los middelwares.
app.use(cors() );
app.use(helmet() );
app.use(morgan("dev") );
app.use(express.json() );

//Configuracion de las rutas.
app.use('/api', appRoutes );


//Iniciar el servidor.
app.listen(puerto, ()=>{
    console.log(`Servidor escuchando en el puerto ${puerto}`);
})