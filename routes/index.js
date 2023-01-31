import express from "express";
import { handleGetRoot } from "../controllers/userController.js";
import { getUsers, Register, Login, Logout } from "../controllers/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/refreshToken.js";
import { getData, createData } from "../controllers/equipmentControllers.js";

const router = express.Router();
const prefix = "/v1/api/";

//ROUTES FOR USERS
router.get(prefix, handleGetRoot);
router.get("/users", verifyToken, getUsers);
router.post("/register", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
router.get("/data", verifyToken, getData);
router.post("/data",  verifyToken, createData);

export default router;
