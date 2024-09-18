//Importo a express para crear rutas
const express = require('express');
//Importo el objeto de router para poder usar sus métodos.
const router = express.Router();
const ArticuloController = require('../controladores/Articulo');
//Otra manera, mismo resultado.
// const Router = require("express");
// const router = Router();

/* 
  Arg1: la ruta de la página donde se hará la petición
  Arg2: Se ejecuta un metodo, en este caso aplicamos el controlador,
  por defecto recibiendo el req y el res y retornando algo a la ruta.
*/
router.get('/ruta-de-prueba', ArticuloController.prueba);
router.get('/curso', ArticuloController.curso);

//Ruta util
//RUTA CREATE DE ENDPOINT CREAR
router.post('/crear', ArticuloController.crear);
//RUTA READ DE ENDPOINT CONSEGUIR
// router.get('/listar', ArticuloController.listar);
//El "?" al final del parámetro hace que este parametro sea opcional.
// router.get("/listar/:ultimos?", ArticuloController.listar);
router.get('/listar/:ultimos?', ArticuloController.listar);

module.exports = router;