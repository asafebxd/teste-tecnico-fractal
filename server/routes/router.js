import express from "express";
import locker from "../controllers/lockers.js";

const router = express.Router();

router.get("/get", locker.getHandlers);

export default router;
