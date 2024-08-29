import { UserProfile } from "@prisma/client";
import prisma from "../../db";

const updateProfileIntoDB = async (
  id: string,
  payload: Partial<UserProfile>
) => {
  const { userId, ...profileData } = payload;
  console.log(profileData)

  //  Check Is user Exists **
  await prisma.user.findUniqueOrThrow({
    where: { id },
  });

  const userProfile = await prisma.userProfile.update({
    where: {
      userId: id,
    },
    data: {
      ...profileData,
    },
  });

  console.log(userProfile, profileData)

  return userProfile
};

export const UserProfileServices  = {
   updateProfileIntoDB
}