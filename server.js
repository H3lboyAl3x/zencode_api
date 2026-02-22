import express from "express";
import dotenv from "dotenv";
import sequelize from "./app/configuracao/db.js";

import router from "./app/estrutura/roteador/router.js";

import cors from "cors";
import { ErrorHandler } from "./app/Middlewares/ErrorHandler.js";
import http from "http";

import path from "path";
import { fileURLToPath } from "url";

import open from "open";
import os from "os";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/zencode/API", router);

app.use(ErrorHandler);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/docs", express.static(path.join(__dirname, "public")));

const server = http.createServer(app);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Banco conectado com sucesso!");

    server.listen(PORT, "0.0.0.0", async () => {

      const Interface = os.networkInterfaces();
      let ipLocal = "localhost";
      for (const interfaceName in Interface) {
        for (const iface of Interface[interfaceName]) {
          if (iface.family === "IPv4" && !iface.internal) {
            ipLocal = iface.address;
          }
        }
      }

      const localUrl = `http://localhost:${PORT}/docs`;
      const networkUrl = `http://${ipLocal}:${PORT}/docs`;

      console.log(`\n--- Server Pronto ---`);
      console.log(`Local:   ${localUrl}`);
      console.log(`Rede:    ${networkUrl}`);
      console.log(`--------------------\n`);

      try {
        await open(localUrl);
      } catch (err) {
        console.log("Aviso: Não foi possível abrir o navegador.");
      }
    });
  } catch (error) {
    console.error("Falha ao conectar com banco de dados:", error);
  }
})();