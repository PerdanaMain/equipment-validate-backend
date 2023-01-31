"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Relation tables intiate
db.user = require("../models/users.js")(sequelize, Sequelize);
db.job = require("../models/jobs.js")(sequelize, Sequelize);
db.equipment = require("../models/equipments.js")(sequelize, Sequelize);
db.action = require("../models/actions.js")(sequelize, Sequelize);

// relation for users API
db.job.hasMany(db.user, {
  as: "users",
  foreignKey: "id",
});
db.user.belongsTo(db.job, {
  as: "jobs",
  foreignKey: "job_id",
});
db.user.hasMany(db.equipment, {
  foreignKey: "updated_by",
  as: "equipments",
});

db.equipment.belongsTo(db.user, {
  foreignKey: "id",
  as: "users",
});
// db.action.hasMany(db.equipment, {
//   foreignKey: "user_id",
//   as: "equipments",
// });

// db.equipment.belongsTo(db.action, {
//   as: "equipmentAction",
//   foreignKey: "equipment_id",
// });
module.exports = db;
