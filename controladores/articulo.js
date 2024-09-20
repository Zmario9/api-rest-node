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

//ENDPOINT CREATE
const crear = (req, res) => {
  //Recoger parámetros por post a guardar
  let parametros = req.body;
  //Validar datos
  try {
    //Le doy los datos a estas variables SI NO están vacios y su tamaño mínimo es de 5 caracteres, máximo 10
    let validar_titulo =
      //Verifico que no este vacio el titulo, luego verifico el tamaño
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
  //Guardar el articulo
  articulo
    .save()
    .then((articuloGuardado) => {
      return res.status(200).json({
        status: "success",
        articulo: articuloGuardado,
        mensaje: "Articulo creado con éxito!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        status: "error",
        mensaje: "No se ha guardado el articulo",
        error,
      });
    });
};

//ENDPOINT READ
const listar = (req, res) => {
  //Se guarda en una variable por si la ocupamos en algún punto
  let consulta = Articulo.find({})
    //Limita el numero de resultados que quieres que se muestren
    // consulta.limit(3);
    //Con establecer -1 en fecha, filtramos del más reciente al más antiguo.
    consulta.sort({fecha: -1})
    .exec()
    .then((articulos) => {
      return res.status(200).send({
        status: "success",
        parametro: req.params.ultimos,
        contador: articulos.length,
        articulos
      });
    })
    .catch((error) => {
      return res.status(400).json({
        status: "error",
        mensaje: "No se ha encontrado articulos",
        error,
      });
    });
};

module.exports = {
  prueba,
  curso,
  crear,
  listar,
};
