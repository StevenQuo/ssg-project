import { IProduct } from "@/lib/params/products-params";
import Image from "next/image";
import Link from "next/link";

export default function ProductElement({
	product,
	loading,
	priority,
}: { product: IProduct } & { loading: "eager" | "lazy"; priority?: boolean }) {
	return (
		<li data-testid="ProductElement">
			<Link href={`/products/${product.id}`} key={product.id}>
				<div>
					{product?.images && (
						<Image
							loading={loading}
							src={product.images[0]}
							alt={product.title ?? ""}
							width={512}
							height={512}
							sizes={"512px"}
							priority={priority}
						/>
					)}
					<div className="mt-2 flex justify-between">
						<div>
							<h3 className="mt-1 text-sm font-semibold text-neutral-900 dark:text-white">{product.title}</h3>
							<p className="mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">
								{product.category}
							</p>
						</div>
						<p className="mt-1 text-sm font-medium text-neutral-900 dark:text-white" data-testid="ProductElement_PriceRange">
							$ {product.price}
						</p>
					</div>
				</div>
			</Link>
		</li>
	);
}
