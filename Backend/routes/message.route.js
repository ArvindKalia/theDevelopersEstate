import { addMessage } from "../controllers/message.controller.js";
import { verifyToken } from "../middleware/verifyToken.js"

import express from "express"
const router = express.Router()


router.post("/:chatId", verifyToken, addMessage)

export default router;