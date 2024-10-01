-- CreateEnum
CREATE TYPE "Lang" AS ENUM ('EN', 'JA');

-- CreateTable
CREATE TABLE "project_translations" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "owners" TEXT NOT NULL,
    "lang" "Lang" NOT NULL,
    "meetStory" JSONB NOT NULL,
    "mission" TEXT NOT NULL,
    "work" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "project_translations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "project_translations" ADD CONSTRAINT "project_translations_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
