import React from "react";
import { ButtonProps } from "../../interfaces";

export default function Button({ size = "medium", shape = "rounded-md", children, onClick }: ButtonProps) {
  // Map sizes to styles
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  // Shapes map directly (using Tailwind-like utility class names)
  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  const className = `
    bg-blue-500 text-white 
    ${sizeClasses[size]} 
    ${shapeClasses[shape]} 
    hover:bg-blue-600
    transition
  `;

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
