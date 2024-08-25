import { User } from "@prisma/client";


export interface IUser { 
  password: string; 
  data: User
}
