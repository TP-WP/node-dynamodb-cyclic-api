const { db } = require("./cyclic-dynamodb");

const nodeData = db.collection("nodeData");

const postData = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hora = Date.now();
      const id = data.usuario + ", " + hora;
      await nodeData.set(id, {
        usuario: data.usuario,
        t_camas: data.t_camas,
        h_ambiente: data.h_ambiente,
      });
      resolve("data posted");
    } catch (err) {
      reject(err);
    }
  });
};

const getAllByUser = async (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { results } = await nodeData.filter({
        usuario: user,
      });
      resolve(results);
    } catch (err) {
      reject(err);
    }
  });
};

const getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { results: nodeMetaData } = await nodeData.list();
      const allData = await Promise.all(
        nodeMetaData.map(async ({ key }) => (await nodeData.get(key)).props)
      );
      resolve(allData);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { postData, getAllByUser, getAll };
