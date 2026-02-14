export interface ProductOption {
  id: string;
  name: string;
  weight: string;
  price: number;
  originalPrice: number;
  tag?: string;
  description: string;
}

export interface Recipe {
  title: string;
  description: string;
  imageAlt: string;
  steps: string[];
}

export interface Review {
  id: number;
  user: string;
  rating: number;
  content: string;
  date: string;
}