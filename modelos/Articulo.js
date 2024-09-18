/*
  Para borrar, crear y modificar datos, hay que llamar a Schema
  para poder definir el esquema de mi modelo, objeto o molde para 
  crear mas articulos en mi base de datos de articulos 

  Model es un metodo que permite indicarle el nombre al modelo,
  como modelo coche, modelo articulo, etc.
  
*/
const {Schema, model} = require('mongoose');
const { __esModule } = require('validator/lib/isFloat');

const ArticuloSchema = new Schema({
  titulo: {
    //Definimos el tipo de dato
    type: String,
    //Y lo hacemos obligatorio
    require: true
  },
  contenido: {
    type: String,
    require: true
  },
  fecha: {
    type: Date,
    //Que por defecto tome la fecha actual
    default: Date.now
  },
  imagen: {
    type: String,
    default: "default.png"
  }
});

module.exports = model('Articulo',ArticuloSchema,"articulos");
                      // Por default aquí lo generará como "articulos"
