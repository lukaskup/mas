import { IInvoice } from "./invoice";
import { IOrder } from "./order";

export enum PaymentType {
  online = "ONLINE",
  cash = "CASH",
}

export interface IPayment {
  id: string;
  createdAt: Date;
  completed: boolean;
  type: PaymentType;
  order?: IOrder;
  invoices?: IInvoice[];
}
