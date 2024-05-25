import { sequelize } from "../pg";
import { DataTypes } from "sequelize";
export const orderModel = sequelize.define(
  "orders",
  {
    orderId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    total: {
      type: DataTypes.DECIMAL,
    },
    productId: {
      type: DataTypes.DECIMAL,
    },
  });
