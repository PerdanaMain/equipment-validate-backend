import Users from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers =  async(req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async(req,res) => {
    const { first_name, last_name, job_id, email, password, re_password, phone, gender} = req.body;
    if(password !== re_password) return res.status(400).json({msg:"password and re-type password do not match"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            first_name:first_name,
            last_name:last_name,
            job_id:job_id, 
            email:email, 
            password:hashPassword,
            phone:phone,
            gender:gender
        });
        res.json({msg:"Register Successfully"});
    } catch (error) {
        console.log(error);
    }
}

export const login = async(req, res) => {
    try {
        const user = await Users.findAll({
            where:{
                email:req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(match) return res.status(400).json({msg:"Wrong Password"})
    } catch (error) {
        res.status(404).json({msg:"Email Not Found"})
    }
}