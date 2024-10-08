/*
  Warnings:

  - You are about to drop the column `step_nb` on the `milestones` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `mission` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `owners` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `projects` table. All the data in the column will be lost.
  - Added the required column `stepNb` to the `milestones` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "milestones" RENAME COLUMN "step_nb" TO "stepNb";


-- AlterTable
ALTER TABLE "projects" DROP COLUMN "description",
DROP COLUMN "mission",
DROP COLUMN "owners",
DROP COLUMN "title";
