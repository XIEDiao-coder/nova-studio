export type Service = {
  number: string;
  title: string;
  name: string;
  description: string;
  features: string[];
};
export type Project = {
  id: "meeting" | "commerce" | "developer";
  name: string;
  category: string;
  description: string;
  tags: string[];
};
export type Plan = {
  name: string;
  subtitle: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
};
