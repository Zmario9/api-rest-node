// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const connection = async() => {
    try{
        mongoose.connect("mongodb://localhost:27017/mi_blog");
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