import User from "../models/userModel.js";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

// get All users pressent
export const getUsers = async (req, res) => {
  try {
    const user = await User.find({}).select("-password");
    // const {password,...info}=user._doc
    res
      .status(200)
      .json({ sucess: true, message: "User has been found", getUser: user });
  } catch (error) {
    res
      .status(500)
      .json({ sucess: false, message: "Unable to get user or user not found" });
    // console.log(error.message)
  }
};

// update the user
export const updateUserRole = async (req, res) => {
    try {
        const { id } = req.params; 
        const { role } = req.body;
    
        // Validate role
        const validRoles = ["Admin", "Manager", "User"];
        if (!validRoles.includes(role)) {
          return res.status(400).json({ success: false, message: "Invalid role" });
        }
    
        // Find and update the user
        const user = await User.findByIdAndUpdate(
          id,
          { $set: role },
          { new: true, }
        );
    
        if (!user) {
          return res.status(404).json({ success: false, message: "User not found" });
        }
    
        res.status(200).json({
          success: true,
          message: "User role updated successfully",
          updatedUser: user,
        });
      } catch (error) {
        console.error("Error updating user role:", error);
        res.status(500).json({ success: false, message: "Server error" });
      }
    
};



// delete the user

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({sucess: true, message:"User has been deleted!"});
  } catch (err) {
    res
      .status(500)
      .json({ sucess: false, message: "Unable to delete profile" });
  }
};
