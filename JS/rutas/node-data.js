const express = require("express");
const router = express.Router();
const nodeData = require("../servicios/node-data");

//GET default
router.get("/", async function (req, res, next) {
  try {
    result = await nodeData.getAll(req.usuario);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
    next(error);
  }
});

//POST data
router.post("/", async function (req, res, next) {
  try {
    result = await nodeData.postData(req.query);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
    next(error);
  }
});

router.put("/", async function (req, res, next) {
  try {
    result = await usuarios.actualizaUsuario(req.query);
    res.send(result);
  } catch (error) {
    console.error(`Error actualizando usuario`, error);
    next(error);
  }
});

router.delete("/", async function (req, res, next) {
  try {
    result = await usuarios.eliminaUsuario(req.query.idUsuario);
    res.send(result);
  } catch (error) {
    console.error(`Error eliminando usuario`, error);
    next(error);
  }
});
module.exports = router;
