import { IPayment, PaymentType } from "./../models/payment";
import { IOrder } from "./../models/order";
import { IInvoice } from "./../models/invoice";
import { v4 as uuidv4 } from "uuid";

export const payments: IPayment[] = [
  {
    id: uuidv4(),
    completed: true,
    createdAt: new Date(2022, 1, 1),
    type: PaymentType.cash,
    invoices: [],
  },
];
