import express from "express";
import locker from "../controllers/lockers.js";

//Cria express router
const router = express.Router();

//Rota GET buscar todos os item
router.get("/lockers", locker.getHandler);

// Rota para criar novo item
router.post("/locker", locker.postHandler);

//Rota para econtrar item por ID
router.get("/locker/:id", locker.getByIdHandler);

//Rota para deletar item por ID
router.delete("/locker/:id", locker.deleteHander);

//Rota para editar item por ID
router.patch("/locker/:id", locker.patchHandler);

export default router;
