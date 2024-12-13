import express from "express";
import { getUsers, deleteUser , updateUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/getusers", getUsers);
router.put("/updateuser", updateUser);
router.delete("/deleteuser/:id", deleteUser);


export default router;