// pages/home.tsx
import React from 'react';
import Card from '@/components/common/Card';
import { useState } from 'react';
import Header from "@/components/layout/Header";
import PostModal from '@/components/common/PostModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts([...posts, post]);
  };

  return (
    <div>
       <div>
      <Header />
      <main style={{ padding: "2rem" }}>
        <h1>Welcome to the Home Page</h1>
        <p>This is the Home page of our Next.js app.</p>
      </main>
    </div>
      <h1>Welcome to the Home Page</h1>
      <Card title="Card Title" content="This is the card content." footer="Card Footer" />


      <div style={{ padding: "2rem" }}>
      <h1>Welcome to the Home Page</h1>
      <button onClick={() => setIsModalOpen(true)}>Add Post</button>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      <div style={{ marginTop: "2rem" }}>
        <h2>Posts</h2>
        {posts.length === 0 ? (
          <p>No posts yet. Add one!</p>
        ) : (
          posts.map((post, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                borderRadius: "6px",
                marginBottom: "1rem",
              }}
            >
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
  };
