import { Flat } from "@prisma/client";
import prisma from "../../db";

const createFlat = async (payload: Flat) => {
  const flat = await prisma.flat.create({
    data: payload,
  });

  return flat;
};

export const FlatServices = {
  createFlat,
};
