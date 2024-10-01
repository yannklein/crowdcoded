/*
  Warnings:

  - You are about to drop the column `gmaps_url` on the `projects` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "projects" DROP COLUMN "gmaps_url",
ADD COLUMN     "gmapsUrl" TEXT;
