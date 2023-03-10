import express from "express";
import { addComment, getComments } from "../controllers/commentController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/", verifyToken, addComment);
router.get("/", verifyToken, getComments);

export default router;
