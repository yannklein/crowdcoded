import prisma from "@/lib/prisma";
import { Lang } from "@prisma/client";

export const getProjects = async (lang: string) => {
  return await prisma.project?.findMany({
    include: {
      projectTranslations: {
        where: {
          lang: lang.toUpperCase() as Lang
        },
      },
    },
  });
};
