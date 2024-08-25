import { IncomingMessage } from "http";

type IMessagesPath =
  | "name"
  | "email"
  | "bio"
  | "password"
  | "address"
  | "profession";

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
};

export default validateMessages;
