/*
  Warnings:

  - Added the required column `mission` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "mission" TEXT NOT NULL,
ALTER COLUMN "owners" SET NOT NULL,
ALTER COLUMN "owners" SET DATA TYPE TEXT;
