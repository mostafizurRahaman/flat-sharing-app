import { User } from "@prisma/client";

export interface IUser {
  password: string;
  data: {
    name: string;
    email: string;
    bio: string;
    profession: string;
    address: string;
  };
}
