import express from "express";
import { getUsers, Register, Login } from "../controllers/users.js";

const router = express.Router();

router.get('/users',getUsers);
router.post('/register', Register);
router.post('/login', Login);

export default router;