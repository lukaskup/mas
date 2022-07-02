import { IPhysical, IService } from "./product";
import { IPayment } from "./payment";

enum OrderStatus {
  inProgress = "INPROGESS",
  ready = "READY",
  completed = "COMPLETED",
  canceled = "CANCELED",
}

export interface IOrder {
  id: string;
  price: number;
  description: string;
  status: OrderStatus;
  createdAt: Date;
  completedAt: Date;
  payment: IPayment | string;
  products: (IPhysical | IService)[] | string[];
}