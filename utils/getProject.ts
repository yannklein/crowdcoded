import prisma from '@/lib/prisma';
import { Lang } from '@prisma/client';

export const getProject = async (id: string, lang: string) => {
  return await prisma.project?.findFirst({
    where: {
      id: id,
    },
    include: {
      projectTranslations: {
        where: {
          lang: lang.toUpperCase() as Lang
        },
        include: {
          milestones: {
            orderBy: {
              step_nb: 'asc'
            }
          }
        }
      },
    },
  });
};
