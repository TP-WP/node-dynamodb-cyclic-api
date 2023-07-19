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
      const { results } = await nodeData.filter({
        usuario: user,
      });
      /*
      const allData = await Promise.all(
        nodeMetaData.map(async ({ key }) => (await nodeData.get(key)).props)
      );
      */
      resolve(results);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { postData, getAll };
