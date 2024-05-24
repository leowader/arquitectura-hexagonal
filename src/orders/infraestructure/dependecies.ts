import { OrderService } from "../aplication/order.service";
import { OrderController } from "./controller/order.controller";
import { OrderRepositoryMemory } from "./order.repository";

export const orderRepositoryMemory = new OrderRepositoryMemory();

export const orderService = new OrderService(orderRepositoryMemory);

export const orderController = new OrderController(orderService);
