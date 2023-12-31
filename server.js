const express = require("express");
const cors = require("cors"); //para evitar problemas con la CORS policy
const usuariosRouter = require("./JS/rutas/usuarios");
const nodeDataRouter = require("./JS/rutas/node-data");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//rutas
//por defecto
app.get("/", async (req, res) => {
  res.send("bienvenido a la api");
});

//ruta usuarios
app.use("/usuarios", usuariosRouter);
app.use("/node-data", nodeDataRouter);

app.listen(PORT, () => console.log(`servidor corriendo en puerto: ${PORT}`));
