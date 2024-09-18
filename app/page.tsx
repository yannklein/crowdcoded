import React from "react"
import Post from "@components/Post"
import { getFeed } from "@/utils/getFeed";


const Blog = async () => {

  const feed = await getFeed();

  return (
      <div className="page">
        <h1>Public Feed</h1>
        <main>
          {feed?.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
  )
}

export default Blog
