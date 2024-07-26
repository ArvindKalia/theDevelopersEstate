import express from "express";
import { shouldbeadmin, shouldbeloggedin } from "../controllers/test.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router()

router.get("/shouldbeloggedin", verifyToken, shouldbeloggedin)
router.get("/shouldbeadmin", shouldbeadmin)

export default router;