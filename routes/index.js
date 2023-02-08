import express from "express";
import {
  handleGetRoot,
  getUsers,
  Register,
  Login,
  Logout,
  deleteUser,
} from "../controllers/userController.js";
import {
  sortByHost,
  sortByRack,
  sortByFloor,
  sortByStatus,
} from "../controllers/sortController.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/refreshToken.js";
import {
  getData,
  createData,
  updateData,
  deleteData,
  getDataById,
  getOn,
  getOff,
  getNotFound,
  getPassive,
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
router.delete(prefix + "/users/:id", deleteUser);

// ROUTES FOR EQUIPMENT
router.get(prefix + "/data", getData);
router.post(prefix + "/create", createData);
router.put(prefix + "/update/:id", updateData);
router.delete(prefix + "/delete/:id", deleteData);
router.get(prefix + "/dataById/:id", getDataById);

// ROUTES FOR FUNCTION EQUIPMENT
router.get(prefix + "/data/status/on", getOn);
router.get(prefix + "/data/status/off", getOff);
router.get(prefix + "/data/status/nf", getNotFound);
router.get(prefix + "/data/status/psv", getPassive);

// Routes for sorting
router.get(prefix + "/sort/hostname", sortByHost);
router.get(prefix + "/sort/rack", sortByRack);
router.get(prefix + "/sort/floor", sortByFloor);
router.get(prefix + "/sort/status", sortByStatus);

export default router;
