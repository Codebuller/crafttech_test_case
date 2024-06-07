const { config } = require("dotenv");
config({ path: '.env' });

const { PG_USER, PG_PASSWORD, PG_DATABASE } = process.env;

module.exports = {
  username: PG_USER,
  password: PG_PASSWORD,
  database: PG_DATABASE,
  dialect: "postgres",
  migrationStorageTableName: "sequelize_migrations",
  seederStorageTableName: "sequelize_seeds",
};
