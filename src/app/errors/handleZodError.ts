import { ZodError, ZodIssue } from "zod";
import { IErrorDetails } from "../interfaces";
import httpStatus from "http-status";


interface IZodErrorReturn  {
  statusCode: number,
  message: string; 
  errDetails: IErrorDetails
}


const handleZodError = (err: ZodError): IZodErrorReturn => {
   
  //  Format Error Message  For All Fields ** 
   const message = err?.issues.reduce(
     (fullMessage: string, issue: ZodIssue) => {
       fullMessage =
         fullMessage +
         (fullMessage.length ? ". " : "") +
         (issue?.path[issue?.path?.length - 1] as string).toUpperCase() +
         " --> " +
         issue?.message;

       return fullMessage;
     },
     ""
   );

  //  Format Array of Issues Here ** 
   const issues = err?.issues.map((field) => ({
     field: field.path[field.path.length - 1] as string,
     message: field.message,
     }));

  
  
  return {
     statusCode: httpStatus.BAD_REQUEST,
     message,
     errDetails: {
       issues,
     },
   };
};
 
export default handleZodError