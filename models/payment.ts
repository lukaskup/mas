import { IInvoice } from "./invoice";
import { IOrder } from "./order";

enum PaymentType {
  online = "ONLINE",
  cash = "CASH",
}

export interface IPayment {
  id: string;
  createdAt: string;
  completed: boolean;
  type: PaymentType;
  order?: IOrder;
  invoices?: IInvoice[];
}
