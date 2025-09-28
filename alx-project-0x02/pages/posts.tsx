import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "../components/common/PostCard";
import{ useEffect, useState } from "react";
import {PostCardProps} from "@/interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostCardProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
      const data: PostCardProps[] = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);
  return (
    <div>
      <Header />
      <main style={{ padding: "2rem" }}>
        <h1>Posts Page</h1>
        <p>Here is where posts will be displayed.</p>
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
      </main>
    </div>
  );
}


export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts: PostCardProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}