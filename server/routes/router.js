import express from "express";
import locker from "../controllers/lockers.js";

const router = express.Router();

router.get("/lockers", locker.getHandler);

router.post("/locker", locker.postHandler);

router.delete("/locker/:id", locker.deleteHander);

router.patch("/locker/:id", locker.patchHandler);

export default router;
