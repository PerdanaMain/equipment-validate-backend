import express from "express";
import {
  handleGetRoot,
  getUsers,
  Register,
  Login,
  Logout,
} from "../controllers/userController.js";
import {
  sortEquipments,
  sortByHost,
  sortByRack,
} from "../controllers/sortController.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/refreshToken.js";
import {
  getData,
  createData,
  updateData,
  deleteData,
  getDataById,
} from "../controllers/equipmentControllers.js";

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
router.get(prefix + "/data", getData);
router.post(prefix + "/create", verifyToken, createData);
router.put(prefix + "/update", verifyToken, updateData);
router.delete(prefix + "/delete", verifyToken, deleteData);
router.get(prefix + "/dataById", verifyToken, getDataById);

// Routes for sorting
router.get(prefix + "/sort/hostname", sortByHost);
router.get(prefix + "/sort/rack", sortByRack);

export default router;
