
export interface IJwtPayload {
  id: string;
  email: string;
}

export interface IOptions { 
  limit?: number; 
  page?: number;
  sortBy?: string; 
  sortOrder?:string
}


export interface IPaginationOptions { 

  limit: number; 
  page: number; 
  sortBy: string;
  sortOrder: "asc" | "desc"
  skip: number
}