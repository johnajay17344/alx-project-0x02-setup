// pages/about.tsx
import React from "react";
import Button from "@/components/common/Button"; // import the actual Button component
import Header from "@/components/layout/Header";
export default function AboutPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>About Us</h1>
      <p>This page demonstrates reusable buttons.</p>
      <Header />
      <main style={{ padding: "2rem" }}>
        <h1>About Us</h1>
        <p>This page demonstrates navigation with a reusable header.</p>
      </main>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <Button size="small" shape="rounded-sm">Small</Button>
        <Button size="medium" shape="rounded-md">Medium</Button>
        <Button size="large" shape="rounded-full">Large</Button>
      </div>
    </div>
  );
}
