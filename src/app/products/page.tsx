import { getProducts } from "@/lib/products";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="main-container">
      <h1 className="title">Daftar Produk</h1>
      <ul>
        {products.map((p: any) => (
          <li className="inline-block m-3 p-3 border text-xs hover:border-red-400 transition-all ease-in-out duration-300" key={p.id}>
            <a href={`/products/${p.id}`}>{p.title} - <span className="text-green-600">${p.price}</span></a>
          </li>
        ))}
      </ul>
    </main>
  )
}