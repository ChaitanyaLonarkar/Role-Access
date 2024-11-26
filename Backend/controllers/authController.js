// import User from "../models/userModel.js";
// import jwt from "jsonwebtoken";


export const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};