-- CreateTable
CREATE TABLE "milestones" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "step_nb" INTEGER NOT NULL,
    "date" DATE,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,
    "projectTranslationId" TEXT NOT NULL,

    CONSTRAINT "milestones_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "milestones" ADD CONSTRAINT "milestones_projectTranslationId_fkey" FOREIGN KEY ("projectTranslationId") REFERENCES "project_translations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
