import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import express from "express"
import cookieParser  from "cookie-parser";

const app = express();

app.use(cookieParser());

export const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        // if (password.length < 6)
        //     return res
        //       .status(400)
        //       .json({ error: "Password length is greater or equal to 6" });
      
          
          const user = await User.findOne({ email });
      
          if (user) {
            return res.status(400).json({ error: "email already exsist" });
          }
      
          const username = await User.findOne({ name });
      
          if (username) {
            return res.status(400).json({ error: "username already exsist" });
          }
          bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
              const createduser = await User.create({ name, email, password: hash ,role});
      
              // let token = jwt.sign({ email }, process.env.JWT_SECRET);
      
              // res.cookie("token", token, {
              //   maxAge: 1 * 24 * 60 * 60 * 1000,
              //   withCredentials: true,
              //   httpOnly: true,
              //   secure: true,
              //   sameSite: "None",
              // });
              // console.log("ye signup token hai ", token);
              // console.log("ye signup cookie hai", req.cookies);
              res.status(200).json({ success:true,message: `${role} registered successfully`});
            });
          });
    } catch (error) {
        res.status(500).json({ success:false,message: error.message });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // const { email} = req.body;
        if (!req.body.email || !req.body.password) {
          return res
            .status(400)
            .json({ success: false, message: "All fields are required" });
        }
    
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
          return res
            .status(400)
            .json({ success: false, message: "Invalid email or password" });
        }
    
        const auth = await bcrypt.compare(req.body.password, user.password);
        if (!auth) {
          return res
            .status(400)
            .json({ success: false, message: "Invalid email or password" });
        }
    
        let token = jwt.sign({ email: req.body.email }, process.env.JWT_SECRET);
        res.cookie("token", token, {
          maxAge: 10 * 24 * 60 * 60 * 1000,
          withCredentials: true,
          httpOnly: false,
          secure: true,
          sameSite: "None",
        });
    
        const { password, ...info } = user._doc;
    
        console.log("ye user hai ", user);
        console.log("ye info hai ", info);
        console.log("ye login token hai ", token);
        // console.log("ye login cookie hai", req.cookies);
        res.status(200).json({
          message: `${user.role} login successfully`,
          success: true,
          user: info,
          
        });
      } catch (error) {
        res.status(500).json({ success: false, error: "Internal Server Error" });
        console.log(error.message)
      }
    };

   export const Logout = (req, res) => {
     console.log("logogogogo",req.cookies)
     if (req.cookies) {
       res.json({ status: true, message: "Logout successfully.." });
       res.clearCookie("token");
        } else {
          res.json({ status: false, message: "Connot Logout.." });
        }
      };