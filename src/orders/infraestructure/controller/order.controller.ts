import { Request, Response } from "express";
import { OrderService } from "../../aplication/order.service";

export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  async addOrder(req: Request, res: Response) {
    try {
      const { productId, total } = req.body;
      res.send({ data: await this.orderService.addOrder(productId, total) });
    } catch (error) {
      if (error instanceof Error) {
        res.send({ error: error.message });
      }
    }
  }
  async getOrders(_req: Request, res: Response) {
    try {
      res.send({ data:await this.orderService.getOrders() });
    } catch (error) {
      if (error instanceof Error) {
        res.send({ error: error.message });
      }
    }
  }
}
