/*
  Warnings:

  - You are about to drop the column `owners_picture` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `project_picture` on the `projects` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "projects" DROP COLUMN "owners_picture",
DROP COLUMN "project_picture",
ADD COLUMN     "ownersPicture" TEXT,
ADD COLUMN     "projectPicture" TEXT;
