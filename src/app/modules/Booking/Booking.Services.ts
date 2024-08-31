//  Booking Application **

import { Booking, BookStatus, Prisma } from "@prisma/client";
import prisma from "../../db";
import { IGetBookingParams } from "./Booking.interface";
import { IOptions, IPaginationOptions } from "../../interfaces";
import { bookingFilterAbleFields } from "./Booking.constant";
import calculatePagination from "../../helpers/calculatePaginate";
import { Request } from "express";

//  ** Create Booking
const createBooking = async (payload: Booking, userId: string) => {
  const { flatId } = payload;

  //  Check Is User Exists **
  await prisma.user.findUniqueOrThrow({
    where: {
      id: userId,
    },
  });

  //  Check Is Flat Exists **
  await prisma.flat.findUniqueOrThrow({
    where: {
      id: flatId,
    },
  });

  const booking = await prisma.booking.create({
    data: {
      flatId,
      userId,
    },
  });

  return booking;
};

//  ** Get Booking Request **
const getAllFromBookingRequestFromDB = async (
  params: IGetBookingParams,
  userId: string,
  options: IOptions
) => {
  const { limit, page, skip, sortBy, sortOrder } = calculatePagination(options);

  //  Check Is User Exists **
  await prisma.user.findUniqueOrThrow({
    where: {
      id: userId,
    },
  });

  // AndConditions **
  const andConditions: Prisma.BookingWhereInput[] = [
    {
      userId: userId,
    },
  ];

  if (params && Object.keys(params).length > 0) {
    andConditions.push({
      AND: Object.keys(params).map((key) => ({
        [key]: {
          equals: params[key as keyof IGetBookingParams],
        },
      })),
    });
  }

  const whereConditions: Prisma.BookingWhereInput = {
    AND: andConditions,
  };

  console.dir(whereConditions, { depth: Infinity });

  //  Get Filter Id **
  const bookings = await prisma.booking.findMany({
    where: whereConditions,
    orderBy: {
      [sortBy]: sortOrder,
    },
    skip,
    take: limit,
  });

  //  Get Total Documents Count:
  const total = await prisma.booking.count({
    where: whereConditions,
  });

  // Meta Data:
  const meta = {
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
  };

  return {
    meta,
    data: bookings,
  };
};

//  Update Booking Status **
const updateBookingStatus = async (id: string, status: BookStatus) => {
   
  //  Check Is Booking Exists **
  await prisma.booking.findUniqueOrThrow({
    where: {
      id,
    },
  });

  //  Update Booking **
  const result = await prisma.booking.update({
    where: {
      id,
    },
    data: { status },
  });


  return result
};

export const BookingServices = {
  createBooking,
  getAllFromBookingRequestFromDB,
  updateBookingStatus,
};
