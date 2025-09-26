// pages/about.tsx
import React from "react";
import Button from "@/components/common/Button"; // import the actual Button component

export default function AboutPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>About Us</h1>
      <p>This page demonstrates reusable buttons.</p>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <Button size="small" shape="rounded-sm">Small</Button>
        <Button size="medium" shape="rounded-md">Medium</Button>
        <Button size="large" shape="rounded-full">Large</Button>
      </div>
    </div>
  );
}
