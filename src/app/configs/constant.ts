import { IncomingMessage } from "http";

type IMessagesPath =
  | "name"
  | "email"
  | "bio"
  | "password"
  | "address"
  | "profession"
  | "squareFeet"
  | "totalBedrooms"
  | "totalRooms"
  | "utilitiesDescription"
  | "location"
  | "description"
  | "rent"
  | "availability"
  | "advanceAmount";

interface IMessageProperties {
  required: string;
  invalid: string;
}

const validateMessages: Record<IMessagesPath, IMessageProperties> = {
  name: {
    required: "Name Is Required!!!",
    invalid: "Name Must Be String!!!",
  },
  email: {
    required: "Email Is Required!!!",
    invalid: "Email Must Be String!!!",
  },
  password: {
    required: "Password Is Required!!!",
    invalid: "Password Must Be String!!!",
  },
  address: {
    required: "Address Is Required!!!",
    invalid: "Address Must Be String!!!",
  },
  bio: {
    required: "Bio Is Required!!!",
    invalid: "Bio Must Be String!!!",
  },
  profession: {
    required: "Profession Is Required!!!",
    invalid: "Profession Must Be String!!!",
  },
  squareFeet: {
    required: "Square Feet Is Required!!!",
    invalid: "Square Feet Must Be Number!!!",
  },
  totalRooms: {
    required: "TotalBedrooms Is Required",
    invalid: "totalBedrooms Should Be Number!!!",
  },
  totalBedrooms: {
    required: "totalRooms Is Required",
    invalid: "Total Rooms Should Be Number!!!",
  },
  utilitiesDescription: {
    required: "utilitiesDescription Is Required!!!",
    invalid: "utilitiesDescription Should Be String!!!",
  },
  location: {
    required: "Location Is Required!!!",
    invalid: "Location Should Be String!!!",
  },
  description: {
    required: "Description Is Required!!!",
    invalid: "Description Should Be String!!!",
  },
  rent: {
    required: "Rent Is Required",
    invalid: "Rent Should Be Number!!!",
  },
  advanceAmount: {
    required: "AdvanceAmount Is Required",
    invalid: "AdvanceAmount Should Be Number!!!",
  },
  availability: {
    required: " ",
    invalid: "Availability Should Be Boolean!!!",
  },
};

export default validateMessages;
