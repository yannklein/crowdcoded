import prisma from "@/lib/prisma";

export const getProjects = async () => {
  return await prisma.project.findMany();
};
