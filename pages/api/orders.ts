import { IOrder } from "./../../models/order";
import { doc, Firestore, setDoc } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../firebase";

import React, { useState } from "react";
import { uuidv4 } from "@firebase/util";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IOrder | string>
) {
  switch (req.method) {
    case "GET":
      return null;
    case "POST":
      const dto = req.body;
      dto.client = dto.client.id;

      dto.price = parseFloat(
        dto.products
          .map((product: any) => {
            const price =
              typeof product.qty !== "undefined"
                ? product.price * product.qty
                : product.price;

            return price;
          })
          .reduce((a: number, b: number) => a + b, 0)
          .toFixed(2)
      );

      dto.products = dto.products.map((product: any) => {
        const result: any = { id: product.id };
        if (typeof product.qty !== "undefined") {
          result.qty = product.qty;
        }
        return result;
      });

      dto.id = uuidv4();
      //TODO odejmij od stanów produdktu stany z zamówienia
      //@ts-ignore
      // db.__proto__ = Firestore.prototype;
      const docRef = doc(db, "orders", dto.id);
      setDoc(docRef, dto).then(() => {
        res.status(200).send("success");
      });
      break;
    case "PUT":
      return null;
    case "DELETE":
      return null;
  }
}
