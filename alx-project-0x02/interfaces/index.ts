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