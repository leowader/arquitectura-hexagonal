import express from "express";
import { orderController } from "../dependecies";

const orderRouter = express();

orderRouter.post("/createOrder", orderController.addOrder.bind(orderController));

orderRouter.get("/orders", orderController.getOrders.bind(orderController));

export { orderRouter };
