
export const getProject = async () => {
  const project = {
    id: "1",
    title: "Project 1",
    description: "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
    published: false,
    owners: "Shoko and Sho Nakano",
    status: "open",
    goal: 100000,
    bid: 34000,
    impacts: ["low carbon", "local"]
  }
  return project
};
