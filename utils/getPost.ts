
export const getPost = async () => {
  const post = {
    id: "1",
    title: "Prisma is the perfect ORM for Next.js",
    content: "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
    published: false,
    author: {
      name: "Nikolas Burk",
      email: "burk@prisma.io",
    },
  }
  return {
    id: post.id,
    title: post.title,
    content: post.content,
    published: post.published,
    author: post.author,
  }
};
