import { Sequelize } from "sequelize";
export const sequelize = new Sequelize(
  process.env.NAME_DB,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect:process.env.DIALECT
  }
);
