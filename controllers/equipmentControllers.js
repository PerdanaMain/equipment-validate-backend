import db from "../models/index.js";

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
  const { id } = req.body;
  try {
    const data = await Equipment.findOne(
      {
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
      },
      {
        where: { id },
      }
    );
    res.status(200).json({ code: 200, status: true, msg: data });
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
    const {
      id,
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
          id: id,
        },
      }
    );
    res.status(200).json({ msg: "Equipment Updated" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteData = async (req, res) => {
  const { id } = req.body;
  try {
    await Equipment.destroy({
      where: { id: id },
    });
    res.status(200).json({ msg: "Equipment Deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// set db

export const getAllRouters = async (req, res) => {
  try {
    const routers = await Equipments.findAll({ where: req.body.router });
  } catch (error) {
    console.log(error.message);
  }
};
export const getAllServers = async (req, res) => {};
export const getAllSwitches = async (req, res) => {};
export const getAllStorages = async (req, res) => {};
export const getAllOTB = async (req, res) => {};
export const getAllGGSN = async (req, res) => {};
