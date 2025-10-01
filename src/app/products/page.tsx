import { getProducts } from "@/lib/products";
import { ProductList } from "@/ui/components/ProductList";

export default async function ProductsPage() {
  const {products} = await getProducts();

  return (
    <section className="mx-auto max-w-7xl p-8 pb-16">
			<h2 className="sr-only">Product list</h2>
			<ProductList products={products} />
			{/* <Pagination
				pageInfo={{
					...products.pageInfo,
					basePathname: `/products`,
					urlSearchParams: newSearchParams,
				}}
			/> */}
		</section>
  )
}