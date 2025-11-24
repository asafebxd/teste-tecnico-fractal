import express from "express";
import router from "./routes/router.js";
import cors from "cors";

import { configDotenv } from "dotenv";
import database from "./infra/database.js";

configDotenv({ path: "./.env" });

//Criar express app
const app = express();

//Interpreta JSON e chama Router
app.use(express.json());
app.use(cors());
app.use("/api/v1", router);

const port = 5000;

//Inicia o servidor
app.listen(port, () => {
  console.log(`App listening on PORT: ${port}`);
});

//Chama conexção com cluster
database.connect();
