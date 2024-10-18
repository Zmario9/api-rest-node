//Llamo a la base de datos.
const { connection } = require("./database/connection");
const express = require("express");
const cors = require("cors");
//Agrego dotenv
const dotenv = require("dotenv");
//Se comienzan a leer las variables de entorno
dotenv.config();

//Inicializar app
console.log("App de node arrancada");
//Conectar a la base de datos
connection();
//Crear servidor Node
const app = express();
const puerto = 3900;
//Configurar cors
app.use(cors());
//Convertir body a objeto JS
//Recibir datos con content-type app/json
app.use(express.json());
//Recibir datos por form-urlencoded
app.use(express.urlencoded({ extended: true }));
//Crear rutas
const rutas_articulo = require("./rutas/Articulo");
//Cargo las rutas
app.use("/api", rutas_articulo);

//Rutas prueba hardcodeadas
app.get("/probando", (req, res) => {
    console.log("Se ha ejecutado el endpoint probando"); 
    return res.status(200).json([{
        curso: "Master en React",
        autor: "MagusDeveloper",
        url:"https://magusdeveloper.com"
    },
    {
        curso: "Master en React",
        autor: "MagusDeveloper",
        url:"https://magusdeveloper.com"
    }]);
    // return res.send("Hola mundo");
});

app.get("/", (req, res) => {
    return res.status(200).send(`
        <h1>Probando la ruta Node JS</h1>
        <p> Creando Api Rest con node </p>
        <p> MIRA MAMA HICE UN BACKEND :D</p>
    `);
    // return res.send("Hola mundo");
});
//Crear servidor y escucharlo
app.listen(puerto,()=>{
  console.log(`Servidor corriendo en el puerto ${puerto}`);  
})
