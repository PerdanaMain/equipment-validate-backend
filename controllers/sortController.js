import { Op } from "sequelize";
import db from "../models/index.js";

// set db
const Equipments = db.equipment;
const Users = db.user;

export const sortEquipments = async (req, res) => {
  const { hostname, status, rack } = req.body;
  try {
    const sort = await Equipments.findAll({
      where: {
        [Op.or]: [
          {
            hostname: {
              [Op.like]: `%${hostname}%`,
            },
          },
          {
            status: {
              [Op.like]: `%${status}%`,
            },
          },
          {
            rack,
          },
        ],
      },
      attributes: ["hostname", "status", "rack"],
      include: {
        model: Users,
        as: "users",
        attributes: ["id", "first_name", "last_name", "email"],
      },
    });
    if (sort.length === 0)
      return res.status(404).json({
        code: 404,
        status: false,
        msg: "We are sorry, data not found",
      });
    return res.status(200).json({ code: 200, status: true, data: sort });
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
