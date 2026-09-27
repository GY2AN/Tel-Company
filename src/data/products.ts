export type Product = {
  id: string;
  name: string;
  price: number;
  tags: string[];
  image: string;
  description: string;
};

export const products: Product[] = [
 {
  id: "1",
  name: "Hairfall Control Oil",
  price: 499,
  tags: ["hairfall"],
  image: "/hairfall-oil.png",
  description: "Reduces hairfall with regular use.",
},
{
  id: "2",
  name: "Anti-Dandruff Oil",
  price: 449,
  tags: ["dandruff", "itchy-scalp"],
  image: "/dandruff-oil.png",
  description: "Soothes scalp, fights dandruff.",
},
{
  id: "3",
  name: "Strengthening Oil",
  price: 549,
  tags: ["strength"],
  image: "/strength-oil.png",
  description: "Strengthens roots for thicker hair.",
},
{
  id: "4",
  name: "Daily Nourish Oil",
  price: 399,
  tags: ["daily-use"],
  image: "/daily-oil.png",
  description: "Light, everyday nourishing oil.",
},
]; 