import express from "express";
import {
  handleGetRoot,
  getUsers,
  Register,
  Login,
  Logout,
} from "../controllers/userController.js";
import { sortEquipments } from "../controllers/sortController.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/refreshToken.js";
import { getData, createData, updateData, deleteData, getDataById } from "../controllers/equipmentControllers.js";

const router = express.Router();
const prefix = "/v1/api";

// ROUTES FOR USERS
router.get(prefix, handleGetRoot);
router.get(prefix + "/users", getUsers);
router.post(prefix + "/register", Register);
router.post(prefix + "/login", Login);
router.get(prefix + "/token", refreshToken);
router.delete(prefix + "/logout", Logout);

// ROUTES FOR EQUIPMENT
router.get(prefix + "/data", verifyToken, getData);
router.post(prefix + "/create", verifyToken, createData);
router.put(prefix + "/update", updateData);
router.delete(prefix + "/delete", deleteData);
router.post(prefix + "/dataById", getDataById);

// Routes for sorting
router.get(prefix + "/sort", verifyToken, sortEquipments);

export default router;
