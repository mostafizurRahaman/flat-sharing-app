/*
  Warnings:

  - You are about to drop the column `proffession` on the `userProfiles` table. All the data in the column will be lost.
  - Added the required column `profession` to the `userProfiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "userProfiles" DROP COLUMN "proffession",
ADD COLUMN     "profession" VARCHAR NOT NULL;
