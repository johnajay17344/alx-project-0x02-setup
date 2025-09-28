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

export interface PostCardProps {
  isOpen: boolean;
  userId: number;
  onClose: () => void;
  onSubmit: (post: { title: string; content: string }) => void;
  id: number;
  title: string;
  body: string;
}
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
}

