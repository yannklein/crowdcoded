import prisma from '@/lib/prisma';

export const getProject = async (id: string) => {
  return await prisma.project?.findFirst({
    where: {
      id: id,
    },
  });
};
