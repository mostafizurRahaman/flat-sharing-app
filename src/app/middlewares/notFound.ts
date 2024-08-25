import { Request, Response } from "express";



const notFound = (req: Request, res: Response) => {
  
  res.send({
     message: "Route Not Found!!!"
  })

}

export default notFound;