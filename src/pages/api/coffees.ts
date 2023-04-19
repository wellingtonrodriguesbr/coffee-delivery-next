import { NextApiRequest, NextApiResponse } from "next";
import coffees from "../../../data.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(201).json(coffees);
}
