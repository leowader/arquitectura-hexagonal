import { Order } from "../order";
//CONTRATO (metodos que debe tener nuestro adapatador=>infraestructura)
export interface IOrderRepository {
  addOrder(order: Order): Promise<Order>;
}
