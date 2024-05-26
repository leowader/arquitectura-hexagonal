import { orderModel } from "../../database/models/order.module";
import { IOrderRepository } from "../domain/interfaces/order.interface";
import { Order } from "../domain/order";
export class OrderRepositoryMemory implements IOrderRepository {
  public async getOrders(): Promise<Order[]> {
    const res = await orderModel.findAll({ raw: true });
    //@ts-ignore
    return res;
  }
  public async addOrder(order: Order): Promise<Order> {
    const res = await orderModel.create({
      total: order.total,
      productId: order.productId,
    });
    return res.dataValues;
  }
}
