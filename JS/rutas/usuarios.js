const express = require("express");
const router = express.Router();
const usuarios = require("../servicios/usuarios");

router.get("/", async function (req, res, next) {
  let text = `
  GET /single/id=x to get single user
  POST /id=x&nombre=yisus&edad=29&rut=1&telefono=1&direccion=tusca
  `;
});

//GET single
router.get("/single", async function (req, res, next) {
  try {
    const userId = req.query.id;
    result = await usuarios.getSingle(userId);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
    next(error);
  }
});

//GET all
router.get("/", async function (req, res, next) {
  try {
    result = await usuarios.getAll();
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
    next(error);
  }
});

//POST usuario
router.post("/", async function (req, res, next) {
  try {
    result = await usuarios.creaUsuario(req.query);
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
