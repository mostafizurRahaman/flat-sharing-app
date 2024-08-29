import { IOptions } from "../interfaces";


const calculatePagination = (options: IOptions, sortableFields?: string[]) => {
  let { limit, page, sortBy, sortOrder } = options;

  limit = Number(limit) || 10;
  page = Number(page) || 1;
  const skip = (page - 1) * limit;
  if (sortableFields?.length) {
    
    sortBy =
      sortBy && sortableFields.includes(sortBy as string) ? sortBy : "createdAt";
  } else { 
    sortBy = sortBy || "createdAt";
  }
  sortOrder = sortOrder || "desc";
  return {
    limit,
    page,
    skip,
    sortBy,
    sortOrder,
  };
};

export default calculatePagination;