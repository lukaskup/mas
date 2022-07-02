import { IService } from "./../models/product";
import { IPayment } from "./../models/payment";
import { IOrder } from "./../models/order";
import { IInvoice } from "./../models/invoice";
import { IPhysical } from "../models/product";
import { v4 as uuidv4 } from "uuid";

export const products: (IPhysical | IService)[] = [
  {
    id: uuidv4(),
    name: "produkt 1",
    price: 100,
    type: "szafa",
    qty: 20,
    parameters: ["duża", "szeroka", "czarna", "itp"],
  },
  {
    id: uuidv4(),
    name: "produkt 1",
    price: 100,
    type: "metal",
    qty: 20,
    parameters: ["duża", "szeroka", "czarna", "itp"],
  },
  {
    id: uuidv4(),
    name: "produkt 2",
    price: 100,
    type: "pieczywo",
    qty: 120,
    parameters: ["duża", "szeroka", "czarna", "itp"],
  },
  {
    id: uuidv4(),
    name: "produkt 3",
    price: 100,
    type: "costam",
    qty: 210,
    parameters: ["duża", "szeroka", "czarna", "itp"],
  },
  {
    id: uuidv4(),
    name: "produkt 4",
    price: 100,
    type: "szafa",
    qty: 0,
    parameters: ["duża", "szeroka", "czarna", "itp"],
  },
  {
    id: uuidv4(),
    name: "produkt 5",
    price: 100,
    type: "szafa",
    qty: 0,
    parameters: ["duża", "szeroka", "czarna", "itp"],
  },
  {
    id: uuidv4(),
    name: "usługa 1",
    price: 2000,
    avgTimeToComplete: "7 dni",
    available: true,
  },
  {
    id: uuidv4(),
    name: "usługa 2",
    price: 12000,
    avgTimeToComplete: "7 dni",
    available: true,
  },
  {
    id: uuidv4(),
    name: "usługa 3",
    price: 22000,
    avgTimeToComplete: "7 dni",
    available: false,
  },
  {
    id: uuidv4(),
    name: "usługa 4",
    price: 42000,
    avgTimeToComplete: "7 dni",
    available: false,
  },
  {
    id: uuidv4(),
    name: "usługa 5",
    price: 21000,
    avgTimeToComplete: "7 dni",
    available: false,
  },
];
