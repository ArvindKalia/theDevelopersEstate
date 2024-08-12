import { addChat, getChat, getChats, readChat } from "../controllers/chat.controller.js"
import { verifyToken } from "../middleware/verifyToken.js"

import express from "express"
const router = express.Router()

router.get("/", verifyToken, getChats)
router.get("/:id", verifyToken, getChat)
router.post("/save", verifyToken, addChat)
router.put("/read/:id", verifyToken, readChat)

export default router;