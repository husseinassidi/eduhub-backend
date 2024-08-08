import express from "express";
import { getAllUsers, getUserById } from "../controllers/usersInfo.controller.js";

const router = express.Router();

// Get all users
router.get("/", getAllUsers);

// Get user by ID
router.get("/:id", getUserById);

export default router;
