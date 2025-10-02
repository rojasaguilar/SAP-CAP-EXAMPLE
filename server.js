const express = require("express");
const cds = require("@sap/cds");
const cors = require("cors");
const { connectDB } = require("./srv/config/connectToMongoDB");
const router = express.Router();

module.exports = async (o) => {
  try {
    connectDB();
    let app = express();
    app.express = express;

    app.use(express.json({ limit: "500kb" }));
    app.use(cors());
    app.use("/api", router);

    //INJECTA LA APP PERSONALIZADA EN EL OBJETO DE SAP CAP
    o.app = app;

    //INICIA EL SERVIDOR DE CDS USANDO LA APP INJECTADA
    o.app.httpServer = await cds.server(o);

    //RETORNA EL RESULTADO DE LA INSTANCIA DEL SERVIDOR
    return o.app.httpServer;
  } catch (error) {
    console.error("error");
    process.exit(1);
  }
};
