/*
  Warnings:

  - The values [ZERO_WASTE] on the enum `Impact` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Impact_new" AS ENUM ('ORGANIC', 'SUSTAINABLE', 'EDUCATES', 'SOCIAL', 'CLIMATE', 'EQUAL');
ALTER TABLE "projects" ALTER COLUMN "impacts" TYPE "Impact_new"[] USING ("impacts"::text::"Impact_new"[]);
ALTER TYPE "Impact" RENAME TO "Impact_old";
ALTER TYPE "Impact_new" RENAME TO "Impact";
DROP TYPE "Impact_old";
COMMIT;
