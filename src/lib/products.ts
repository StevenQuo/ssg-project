export async function getProducts() {
    const res = await fetch("https://dummyjson.com/products/search?q=iphone");
    if(!res.ok) throw new Error("Gagal fetch products");
    return res.json();
}

export async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error("Gagal fetch product");
  return res.json();
}