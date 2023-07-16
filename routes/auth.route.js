import express from "express";
import authController from "../controllers/auth.controller.js";

const router = express.Router();

router.use("/register", authController.register);
router.use("/login", authController.login);

export default router;
