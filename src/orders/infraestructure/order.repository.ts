import { orders } from "../../database/db";
import { orderModel } from "../../database/models/order.module";
import { IOrderRepository } from "../domain/interfaces/order.interface";
import { Order } from "../domain/order";

export class OrderRepositoryMemory implements IOrderRepository {
  public async getOrders(): Promise<Order[]> {
    return await orders;
  }
  public async addOrder(order: Order): Promise<Order> {
    const res = await orderModel.create({
      total:order.total,
      productId: order.productId,
    });
    return res.dataValues
  }
}
