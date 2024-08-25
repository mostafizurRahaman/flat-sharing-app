import bcrypt from "bcrypt";

const encryptPassword = async (plainText: string, salt_rounds: number) => {
  const password = await bcrypt.hash(plainText, salt_rounds);

  return password;
};

const comparePassword = async (plainText: string, hashedPassword: string) => {
  const isCorrectPassword = await bcrypt.compare(plainText, hashedPassword);

  return isCorrectPassword;
};

export const passwordHelpers = {
  encryptPassword,
  comparePassword,
};
