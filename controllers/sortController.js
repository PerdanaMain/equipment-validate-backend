import { Op } from "sequelize";
import db from "../models/index.js";

// set db
const Equipments = db.equipment;
const Users = db.user;

export const sortEquipments = async (req, res) => {
  const { hostname, floor, func, category, group, rack, status } = req.body;

  try {
    const sort = await Equipments.findAll({
      where: {
        [Op.or]: [
          {
            hostname: {
              [Op.like]: `%${hostname}%`,
            },
            floor: {
              [Op.like]: `%${floor}%`,
            },
            func: {
              [Op.like]: `%${func}%`,
            },
            category: {
              [Op.like]: `%${category}%`,
            },
            group: {
              [Op.like]: `%${group}%`,
            },
            rack: {
              [Op.like]: `%${rack}%`,
            },
            status: {
              [Op.like]: `%${status}%`,
            },
          },
        ],
      },
      include: {
        model: Users,
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
    if (!sort)
      return res.status(400).json({
        code: 404,
        status: false,
        msg: "Sorry, Data Not Found!",
      });
    return res.status(200).json({
      code: 200,
      status: true,
      msg: "Great, Data found",
      data: sort,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const sortByHost = async (req, res) => {
  const { hostname } = req.body;
  try {
    const get = await Equipments.findAll({
      where: {
        hostname: {
          [Op.like]: `%${hostname}%`,
        },
      },
      include: {
        model: Users,
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
    return res.status(200).json({ code: 200, status: true, data: get });
  } catch (error) {
    console.log(error.message);
  }
};
export const sortByRack = async (req, res) => {
  const { rack } = req.body;
  try {
    const get = await Equipments.findAll({
      where: {
        rack: {
          [Op.like]: `%${rack}%`,
        },
      },
      include: {
        model: Users,
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
    return res.status(200).json({ code: 200, status: true, data: get });
  } catch (error) {
    console.log(error.message);
  }
};
