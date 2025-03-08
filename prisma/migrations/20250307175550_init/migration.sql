/*
  Warnings:

  - You are about to drop the column `startIime` on the `Event` table. All the data in the column will be lost.
  - Added the required column `startTime` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "startIime",
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;
