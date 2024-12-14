import express from "express";
import { getUsers, deleteUser , updateUserRole } from "../controllers/userController.js";

const router = express.Router();

router.get("/getusers", getUsers);
router.put("/updaterole/:id", updateUserRole);
router.delete("/deleteuser/:id", deleteUser);


export default router;