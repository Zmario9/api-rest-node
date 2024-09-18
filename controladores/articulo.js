//crear un objeto para los métodos FORMA 1
// const controlador = {
//     propiedad: ()=>{

//     }
// }

// module.exports = {
//     nombre_de_metodo
// }

//Forma 2
// const nombre_de_metodo = ()=>{

// }

//Programación funcional FORMA 2
// function nombre_de_metodo(){

// }
const validator = require("validator");
const Articulo = require("../modelos/Articulo");
const prueba = (req, res) => {
  return res.status(200).json({
    mensaje: "Soy una accion de prueba en mi controlador de articulos",
  });
};

const curso = (req, res) => {
  console.log("Se ha ejecutado el endpoint probando");
  return res.status(200).json([
    {
      curso: "Master en React",
      autor: "MagusDeveloper",
      url: "https://magusdeveloper.com",
    },
    {
      curso: "Master en React",
      autor: "MagusDeveloper",
      url: "https://magusdeveloper.com",
    },
  ]);
  // return res.send("Hola mundo");
};

const crear = (req, res) => {
  //Recoger parámetros por post a guardar
  let parametros = req.body;
  //Validar datos
  try {
    //Le doy los datos a estas variables SI NO están vacios y su tamaño mínimo es de 5 caracteres, máximo 10
    let validar_titulo =
      !validator.isEmpty(parametros.titulo) &&
      validator.isLength(parametros.titulo, { min: 5, max: undefined });
    let validar_contenido = !validator.isEmpty(parametros.contenido);
    if (!validar_titulo || !validar_contenido) {
      throw new Error("No se ha validado la información");
    }
  } catch (error) {
    return res.status(400).json({
      status: "Error",
      mensaje: "Faltan datos por enviar",
    });
  }
  //Crear el objeto a guardar
  const articulo = new Articulo(parametros);

  /*
      Asignar valores a objeto basado en le modelo 
      (que puede ser manual o automático) 
    */
  //    articulo.titulo = parametros.titulo;
  //Guardar el artículo en la base de datos

//   articulo.save((error, articuloGuardado) => {
//     //Si hay error o no hay guardado, retorna error
//     if (error || !articuloGuardado) {
//       return res.status(400).json({
//         status: "error",
//         mensaje: "No se ha guardado el articulo",
//       });
//     }

//     //Devolver resultado (osea la respuesta) si la hay
//     return res.status(200).json({
//         status: "success",
//         articulo: articuloGuardado,
//         mensaje: "Articulo creado con éxito!",
//     });
//   });
articulo.save().then(articuloGuardado => {
    return res.status(200).json({
        status: "success",
        articulo: articuloGuardado,
        mensaje: "Articulo creado con éxito!",
    });
})
.catch(error => {
    return res.status(400).json({
        status: "error",
        mensaje: "No se ha guardado el articulo",
        error 
    });
});
// let output;
// (async () => {
//    output = await articulo.save();
// })
};

module.exports = {
  prueba,
  curso,
  crear,
};
