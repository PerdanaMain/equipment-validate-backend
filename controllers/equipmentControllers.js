import db from "../models/index.js";
import { Op } from "sequelize";

const user = db.user;
const Equipment = db.equipment;

export const getData = async (req, res) => {
  try {
    const data = await Equipment.findAll({
      include: {
        model: user,
        as: "users",
        attributes: [
          "id",
          "first_name",
          "last_name",
          "phone",
          "gender",
          "email",
        ],
      },
    });
    res.status(200).json({ code: 200, status: true, data });
  } catch (error) {
    console.log(error);
  }
};

export const getDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Equipment.findOne({
      where: { id },
      include: {
        model: user,
        as: "users",
        attributes: [
          "id",
          "first_name",
          "last_name",
          "phone",
          "gender",
          "email",
        ],
      },
    });
    res.status(200).json({ code: 200, status: true, data });
  } catch (error) {
    console.log(error);
  }
};

export const createData = async (req, res) => {
  const {
    user_id,
    location,
    floor,
    rack,
    hostname,
    capacity,
    brand,
    type,
    serial_number,
    functions,
    category,
    group,
    status,
    created_by,
  } = req.body;
  try {
    await Equipment.create({
      user_id,
      location,
      floor,
      rack,
      hostname,
      capacity,
      brand,
      type,
      serial_number,
      function: functions,
      category,
      group,
      status,
      created_by,
    });
    res.json({ msg: "Create Successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      user_id,
      location,
      floor,
      rack,
      hostname,
      capacity,
      brand,
      type,
      serial_number,
      functions,
      category,
      group,
      status,
      updated_by,
    } = req.body;
    await Equipment.update(
      {
        user_id,
        location,
        floor,
        rack,
        hostname,
        capacity,
        brand,
        type,
        serial_number,
        function: functions,
        category,
        group,
        status,
        updated_by,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).json({ msg: "Equipment Updated" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    await Equipment.destroy({
      where: { id },
    });
    res.status(200).json({ msg: "Equipment Deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// set db

export const getOn = async (req, res) => {
  try {
    const on = await Equipment.findAll({
      where: {
        status: {
          [Op.like]: `%On%`,
        },
      },
      include: {
        model: user,
        as: "users",
        attributes: [
          "id",
          "first_name",
          "last_name",
          "phone",
          "gender",
          "email",
        ],
      },
    });
    return res.status(200).json({ code: 200, status: true, data: on });
  } catch (error) {
    console.log(error.message);
  }
};
export const getOff = async (req, res) => {
  try {
    const off = await Equipment.findAll({
      where: {
        status: {
          [Op.like]: `%Off%`,
        },
      },
      include: {
        model: user,
        as: "users",
        attributes: [
          "id",
          "first_name",
          "last_name",
          "phone",
          "gender",
          "email",
        ],
      },
    });
    return res.status(200).json({ code: 200, status: true, data: off });
  } catch (error) {
    console.log(error.message);
  }
};
export const getNotFound = async (req, res) => {
  try {
    const nf = await Equipment.findAll({
      where: {
        status: {
          [Op.like]: `%Not Found%`,
        },
      },
      include: {
        model: user,
        as: "users",
        attributes: [
          "id",
          "first_name",
          "last_name",
          "phone",
          "gender",
          "email",
        ],
      },
    });
    return res.status(200).json({ code: 200, status: true, data: nf });
  } catch (error) {
    console.log(error.message);
  }
};
export const getPassive = async (req, res) => {
  try {
    const psv = await Equipment.findAll({
      where: {
        status: {
          [Op.like]: `%Passive%`,
        },
      },
      include: {
        model: user,
        as: "users",
        attributes: [
          "id",
          "first_name",
          "last_name",
          "phone",
          "gender",
          "email",
        ],
      },
    });
    return res.status(200).json({ code: 200, status: true, data: psv });
  } catch (error) {
    console.log(error.message);
  }
};
