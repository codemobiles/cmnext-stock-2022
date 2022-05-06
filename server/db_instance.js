const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: true,
});

(async () => {
  await sequelize.authenticate();
})();

module.exports = sequelize;
