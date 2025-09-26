// components/layout/Header.tsx
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header style={{ padding: "1rem", background: "#f4f4f4" }}>
      <nav>
        <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
