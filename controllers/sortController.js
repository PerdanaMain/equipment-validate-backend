import db from "../models/index.js";

// set db
const Equipments = db.equipment;

export const sortEquipments = async (req, res) => {
  const { hostname, floor, func, category, group, rack, status } = req.body;

  try {
    const sort = await Equipments.findAll({
      where: {
        hostname,
        floor,
        function: func,
        category,
        group,
        rack,
        status,
      },
      include: {
        model: actions,
        as: "equipmentAction",
        include: {
          model: users,
          as: "userAction",
        },
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
      data: { sort },
    });
  } catch (error) {
    console.log(error.message);
  }
};
