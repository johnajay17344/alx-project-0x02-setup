export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}
export interface CardProps  {
  title: string;
  content: string;
  footer?: string;
}

// interfaces/index.ts
export interface ButtonProps {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  children: React.ReactNode;
  onClick?: () => void;
}
