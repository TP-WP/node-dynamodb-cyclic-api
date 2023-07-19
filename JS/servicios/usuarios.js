const { db } = require("./cyclic-dynamodb");

const usuarios = db.collection("usuarios");

const creaUsuario = (usuario) => {
  return new Promise(async (resolve, reject) => {
    try {
      await usuarios.set(usuario.id, {
        nombre: usuario.nombre,
        edad: usuario.edad,
        rut: usuario.rut,
        telefono: usuario.telefono,
        direccion: usuario.direccion,
      });
      resolve("usuario creado");
    } catch (err) {
      reject(err);
    }
  });
};
// Get a single item
const getSingle = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const item = await usuarios.get(userId);
      resolve(item);
    } catch (err) {
      reject(err);
    }
  });
};

//getAll
const getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { results: usersMetaData } = await usuarios.list();
      const allUsers = await Promise.all(
        usersMetaData.map(async ({ key }) => (await usuarios.get(key)).props)
      );
      resolve(allUsers);
    } catch (err) {
      reject(err);
    }
  });
};

const actualizaUsuario = async (usuario) => {
  return new Promise(async (resolve, reject) => {
    const sql = `UPDATE usuario SET nombre = '${usuario.nombre}', edad = '${usuario.edad}', rut='${usuario.rut}', telefono='${usuario.telefono}', direccion='${usuario.direccion}' WHERE id='${usuario.id}';`;
    db.run(sql, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("usuario actualizado");
      }
    });
  });
};

const eliminaUsuario = async (idUsuario) => {
  return new Promise(async (resolve, reject) => {
    const sql = `DELETE FROM usuario WHERE id='${idUsuario}'`;
    db.run(sql, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("usuarioEliminado");
      }
    });
  });
};

module.exports = {
  creaUsuario,
  getAll,
  getSingle,
  actualizaUsuario,
  eliminaUsuario,
};
