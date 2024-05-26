import { sequelize } from "../pg";
import { DataTypes } from "sequelize";
export const orderModel = sequelize.define("orders", {
  orderId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  total: {
    type: DataTypes.INTEGER,
  },
  productId: {
    type: DataTypes.INTEGER,
  },
});

