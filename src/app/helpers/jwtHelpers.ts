import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import { IJwtPayload } from "../interfaces";
import AppError from "../errors/AppError";
import httpStatus from "http-status";

const createToken = (
  payload: IJwtPayload,
  secret: Secret,
  expiresIn: string
) => {

  const token = jwt.sign(payload, secret, { expiresIn });
  return token;
};



const verifyToken =  (token: string, secret: Secret) => {
   try {
     const payload = jwt.verify(token, secret) as JwtPayload
     return payload; 
   } catch (err) {
     throw new AppError(httpStatus.UNAUTHORIZED, "You Aren't Authorized!!!!")
   }
}

export const jwtHelpers = {
  createToken,
  verifyToken,
};
