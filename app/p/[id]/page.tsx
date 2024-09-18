import React from "react"
import ReactMarkdown from "react-markdown"
import { PostProps } from "@components/Post"
import { getPost } from "@/utils/getPost"


const Post = async () => {

  const post: PostProps = await getPost()

  let dynamicTitle = post.published ? post.title : `${post.title} (Draft)`;

  return (
    <div>
      <h2>{dynamicTitle}</h2>
      <p>By {post.author?.name || "Unknown author"}</p>
      <ReactMarkdown children={post.content} />
    </div>
  )
}

export default Post
