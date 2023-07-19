const { db } = require("./cyclic-dynamodb");

const nodeData = db.collection("nodeData");

const postData = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const id = data.usuario + data.time;
      await nodeData.set(id, {
        usuario: data.usuario,
        t_camas: data.t_camas,
        h_ambiente: data.h_ambiente,
        time: data.time,
      });
      resolve("data posted");
    } catch (err) {
      reject(err);
    }
  });
};

const getAll = async (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.collection("nodeData").list();
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { postData, getAll };
