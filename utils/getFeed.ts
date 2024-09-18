
export const getFeed = async () => {
  const projects = [
    {
      id: "1",
      title: "Project 1",
      description: "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
      published: false,
      owners: ["Sho", "Shoko"],
      status: "open",
      goal: 100000,
      bid: 34000,
      impacts: ["low carbon", "local"]
    },
    {
      id: "2",
      title: "Project 2",
      description: "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
      published: false,
      owners: ["Sho", "Shoko"],
      status: "open",
      goal: 200000,
      bid: 190000,
      impacts: ["social service", "local"]
    },
  ]
  return projects
};
