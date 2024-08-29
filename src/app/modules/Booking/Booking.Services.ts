



//  Booking Application ** 

import { Booking } from "@prisma/client";
import prisma from "../../db";

const createBooking = async (payload: Booking, userId: string) => { 
    const {flatId} = payload;

  //  Check Is User Exists ** 
  await prisma.user.findUniqueOrThrow({
    where: { 
       id: userId
      }
  })

  //  Check Is Flat Exists ** 
  await prisma.flat.findUniqueOrThrow({
     where: {
       id: flatId
     }
  })

  
  const booking = await prisma.booking.create({
    data: {
      flatId, 
      userId,
      }     
  })


  return booking;
}



export const BookingServices = { 
  createBooking,
}