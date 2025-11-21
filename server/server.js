import express from "express";
import router from "./routes/router.js";

import { configDotenv } from "dotenv";
import database from "./infra/database.js";

configDotenv({ path: "./.env" });

const app = express();

app.use(express.json());
app.use("/api/v1", router);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App listening on PORT: ${port}`);
});

database.connect();
