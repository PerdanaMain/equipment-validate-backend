import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import db from "../models/index.js";
const Users = db.user;
const jobs = db.job;

export const handleGetRoot = async (req, res) => {
  res.status(200).json({
    code: 200,
    status: "OK",
    msg: "Management API For SNB Validation is Ready",
  });
};

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: [
        "job_id",
        "first_name",
        "last_name",
        "phone",
        "gender",
        "email",
      ],
      include: {
        model: jobs,
        as: "jobs",
        attributes: ["id", "job_name"],
      },
    });
    res.status(200).json({ code: 200, status: true, data: users });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await Equipment.destroy({
      where: { id },
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const Register = async (req, res) => {
  const {
    first_name,
    last_name,
    job_id,
    email,
    password,
    re_password,
    phone,
    gender,
    secret_number,
  } = req.body;
  const secretNumber = process.env.secret;
  const user = await Users.findAll({
    where: {
      email,
    },
  });
  if (user != "")
    return res.status(400).json({
      code: 400,
      status: false,
      msg: "Your email has been created before",
    });
  if (password !== re_password)
    return res
      .status(400)
      .json({ msg: "Password and re-type password do not match" });
  if (secretNumber !== secret_number)
    return res.status(403).json({ msg: "Please Get The Right Access Number" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await Users.create({
      first_name,
      last_name,
      email,
      password: hashPassword,
      phone,
      gender,
      job_id,
    });
    res.json({ msg: "Register Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

export const Login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
      include: {
        model: jobs,
        as: "jobs",
        attributes: ["id", "job_name"],
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: "Wrong Password" });
    const userId = user[0].id;
    const first_name = user[0].first_name;
    const last_name = user[0].last_name;
    const email = user[0].email;
    const job_id = user[0].jobs.id;
    const accessToken = jwt.sign(
      { userId, first_name, last_name, email, job_id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "20s",
      }
    );
    const refreshToken = jwt.sign(
      { userId, first_name, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      // , secure:true
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "Email Not Found" });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await Users.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.status(200).json({
    code: 200,
    status: true,
    msg: "Logout Successfully",
  });
};
