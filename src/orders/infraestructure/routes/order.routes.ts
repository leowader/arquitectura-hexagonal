import express from "express";
import { orderController } from "../dependecies";

const orderRouter = express();

orderRouter.post("/order", orderController.addOrder.bind(orderController));

orderRouter.get("/orders", orderController.getOrders.bind(orderController));

export { orderRouter };
