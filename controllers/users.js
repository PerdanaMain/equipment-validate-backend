import Users from "../models/userModel.js";
import bcrypt from "bcrypt";
import users from "../models/userModel.js";

export const getUsers =  async(req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async(req,res) => {
    const { job_id, email, password, name, phone, gender} = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await users.create({
            job_id:job_id, 
            email:email, 
            password:hashPassword, 
            name:name, 
            phone:phone,
            gender:gender
        });
        res.json({msg:"Register Successfully"});
    } catch (error) {
        console.log(error);
    }
}