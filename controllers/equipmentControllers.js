import db from "../models/index.js";


const equipment = db.equipment;
const user = db.user;


export const getData = async (req, res) => {
    try {
      const data = await equipment.findAll();
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
};

export const createData = async (req, res) => {
    const {
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
      created_by } = req.body;
    try {
        await equipment.create({
            location,
            floor,
            rack,
            hostname,
            capacity,
            brand,
            type,
            serial_number,
            function : functions,
            category,
            group,
            status,
            updated_by,
            created_by
        })
        res.json({ msg: "Create Successfully" });
    } catch (error) {
        console.log(error);
    }
};

export const updateData = async (req, res) => {
  try {
      const updateData = await equipment.updateOne({_id:req.params.id}, {$set: req.body});
      res.status(200).json(updateData);
  } catch (error) {
      res.status(400).json({message: error.message});
  }
}

export const deleteData = async (req, res) => {
  try {
      const deleteData = await equipment.deleteOne({_id:req.params.id});
      res.status(200).json(deleteData);
  } catch (error) {
      res.status(400).json({message: error.message});
  }
}
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
