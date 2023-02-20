import express from "express";
import { login } from "../controllers/auth.js";

// router is an objest
const router = express.Router();

router.post("/login", login);

export default router;
