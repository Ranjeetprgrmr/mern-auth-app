import express from 'express';
import { test } from "../controllers/user.controller.js";
import { updateUser, deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyToken.js";



const router = express.Router();

router.get("/", test);
router.post("/update/:id", verifyToken,  updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);

export default router;