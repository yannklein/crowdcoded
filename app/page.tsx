import React from "react"
import Post, { PostProps } from "@components/Post"
import { getFeed } from "@/utils/getFeed";



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
