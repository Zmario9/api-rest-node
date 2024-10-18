// import mongoose from 'mongoose';

const mongoose = require('mongoose');
const connection = async() => {
    try{
        //Aquí hago el llamado a la variable de entorno del .env
        mongoose.connect(process.env.MONGODB_URI);
        //Parametros dentro del objeto, solo en caso de aviso
        /*
          useUnifiedTopology: true,
          useNewUrlParser: true,
          useCreateIndex: true
        */
       console.log("Se ha conectado correctamente a la base de datos mi_blog");
    } catch(error){
        console.log(error);
        throw new Error("No se ha podido conectar a la base de datos");
    }
}

module.exports = {
    connection
}