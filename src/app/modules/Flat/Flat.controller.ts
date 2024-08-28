import httpStatus from "http-status";
import catchAsync from "../../helpers/catchAsync";
import sendResponse from "../../helpers/sendResponse";
import { FlatServices } from "./Flat.services";
import { IOptions } from "../../interfaces";
import pick from "../../helpers/pick";
import { filterAbleFields } from "./Flat.constant";
import { paginationOptions } from "../../configs/pagination";



const createFlat = catchAsync(async (req, res, next) => {
  

  const result = await FlatServices.createFlat(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Flat added successfully",
    data: result,
  });
});

const getAllFlats = catchAsync(async (req, res) => {

  //  FilerAbleFields here **
  const filterOptions = pick(req.query, filterAbleFields);

  // Options of Pagination **
  const options = pick(req.query, paginationOptions);
  console.log(Boolean("true"));
  
  const result = await FlatServices.getAllFlatsFromDB(filterOptions, options);


  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Flats Retrieved Successfully!!!`,
    meta: result.meta,
    data: result.data,
  });
});


const updateFlatByID = catchAsync(async(req,res) => {
    
  const { id } = req.params; 
  
  const result = await FlatServices.updateFlatByID(id, req.body)
  
  sendResponse(res, { 
    statusCode: httpStatus.OK, 
    success: true, 
    message: 'Flat Information Updated Successfully!!!', 
    data: result
  })

})

export const FlatController = {
  createFlat,
  getAllFlats,
  updateFlatByID,
};
