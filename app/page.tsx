import React from "react"
import Post, { PostProps } from "@components/Post"
import { getFeed } from "@/utils/getFeed";

// export const fetchPostProps: GetStaticProps = async () => {
//   const feed = [
//     {
//       id: "1",
//       title: "Prisma is the perfect ORM for Next.js",
//       content: "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
//       published: false,
//       author: {
//         name: "Nikolas Burk",
//         email: "burk@prisma.io",
//       },
//     },
//   ]
//   return {
//     props: { feed },
//     revalidate: 10
//   }
// }
export const revalidate = 100;

type Props = {
  feed: PostProps[]
}

const Blog: React.FC<Props> = (props) => {
  const feed = getFeed();
  return (
      <div className="page">
        <h1>Public Feed</h1>
        <main>
          {props.feed?.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
  )
}

export default Blog
