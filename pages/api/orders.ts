import { IOrder } from "./../../models/order";
import { doc, setDoc } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../firebase";

import React, { useState } from "react";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IOrder>
) {
  switch (req.method) {
    case "GET":
      return null;
    case "POST":
      console.log(req.body);
      //   setDoc(doc(db, "cities", "LA"), {
      //     name: "Los Angeles",
      //     state: "CA",
      //     country: "USA",
      //   }).then(() => {
      //     res.status(200).send();
      //   });
      break;
    case "PUT":
      return null;
    case "DELETE":
      return null;
  }
}
