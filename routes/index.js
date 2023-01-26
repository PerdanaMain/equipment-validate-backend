import express from "express";
import { handleGetRoot } from "../controllers/userController.js";
const router = express.Router();
const prefix = "/v1/api/";

//ROUTES FOR USERS
router.get(prefix, handleGetRoot);

export default router;
