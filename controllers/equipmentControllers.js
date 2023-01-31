import db from "../models/index.js";

// set db
const Equipments = db.equipment;

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
