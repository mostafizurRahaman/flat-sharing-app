import { Flat, Prisma } from "@prisma/client";
import prisma from "../../db";
import { IOptions } from "../../interfaces";
import { searchAbleFields, sortableFields } from "./Flat.constant";
import calculatePagination from "../../helpers/calculatePaginate";
import { IFlatFilterableFields } from "./Flat.interface";

const createFlat = async (payload: Flat) => {
  const flat = await prisma.flat.create({
    data: payload,
  });

  return flat;
};

//  Get All Flats From DB **
const getAllFlatsFromDB = async (
  params: IFlatFilterableFields,
  options: IOptions
) => {
  //  Filter Able Fields **
  const { searchTerm, availability } = params;

  //  Pagination Elements** 
  const {limit, page, skip, sortBy, sortOrder } = calculatePagination(options, sortableFields)

  console.log({ limit, page, skip, sortBy, sortOrder });
  const andConditions: Prisma.FlatWhereInput[] = [];

  //  SearchAble Fields are here **
  if (searchTerm) {
    andConditions.push({
      OR: searchAbleFields.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }


  //  Filterable Fields is here **
  if (availability === 'true' || availability === 'false') {
    andConditions.push({
      availability: {
        equals: availability === 'true' ? true : false ,
      },
    });
  }

  const whereConditions: Prisma.FlatWhereInput = {
    AND: andConditions,
  };

  console.dir(whereConditions, {depth: Infinity})

  const result = await prisma.flat.findMany({
    where: whereConditions,
    orderBy: {
      [sortBy]: sortOrder
    }, 
    take: limit, 
    skip,
    
  });

  const total = await prisma.flat.count({
     where: whereConditions
  })

  const meta = { 
    limit, 
    page, 
    total,
    totalPages: Math.ceil(total / limit)
  }
  return {
    meta, 
    data: result
  };
};


//  Update Flats Information **
const updateFlatByID = async(id: string, payload: Partial<Flat>) => {
   
  //  Check Is Flat Exists With This ID ** 
  await prisma.flat.findUniqueOrThrow({
    where: { 
       id
     }
  })


  const result = await prisma.flat.update({
    where: {
       id
    }, 
    data: payload
  })


  return result;
}



export const FlatServices = {
  createFlat,
  getAllFlatsFromDB,
  updateFlatByID,
};
