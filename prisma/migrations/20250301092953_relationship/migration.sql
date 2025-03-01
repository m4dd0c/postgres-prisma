/*
  Warnings:

  - You are about to alter the column `psk` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(4)`.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "psk" SET DATA TYPE VARCHAR(4);
