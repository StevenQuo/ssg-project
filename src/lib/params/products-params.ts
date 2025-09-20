export async function generateProductParams() {
  type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
    rate: number;
    count: number;
  };
  }

  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return products.map((p: Product) => ({
    id: p.id.toString(),
  }));
}