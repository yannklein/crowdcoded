import prisma from "@/lib/prisma";

export const getProjectDonators = async (projectId: string) => {
  const donators = await prisma.donation?.findMany({
    where: {
      showDonator: true,
      project: {
        id: projectId
      }
    },
  });
  const names = donators.map((donator) => donator.name);
  const uniqueNames = Array.from(new Set(names));
  return uniqueNames;
};
