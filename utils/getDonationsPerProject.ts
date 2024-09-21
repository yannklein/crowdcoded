import prisma from "@/lib/prisma";

export const getDonationsPerProject = async (projectId: string) => {
  const count = await prisma.donation?.count({
    where: {
      project: {
        id: projectId
      }
    }
  });
  const amount = await prisma.donation?.aggregate({
    _sum: {
      amount: true
    },
    where: {
      project: {
        id: projectId
      }
    }
  });  
  return {
    count,
    amount: amount._sum.amount
  }
};
