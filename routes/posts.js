import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";

const router = express.Router();

// Read routes
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

// Update routes
router.patch("/:id/like", verifyToken, likePost); // this "id" is id of post

export default router;
