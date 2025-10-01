import { getProduct } from "@/lib/products";
import { generateProductParams } from "@/lib/params/products-params";
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams(){
    return generateProductParams();
}

export default async function ProductDetailPage({ params }: Props) {
    
  const { id } = await params;
  const product = await getProduct(id);

  const message = `Halo, saya ingin memesan *${product.title}* dengan rincian:
  Harga: $ ${product.price};
  Kategori: ${product.category};
  Brand: ${product.brand};
  Berat: ${product.weight};
  Dimensi: 
    Lebar: ${product.dimensions.width} inch
    Tinggi: ${product.dimensions.height} inch

  Terima kasih.`;

  const encodedMessage = encodeURIComponent(message);

  return (
    <section className="mx-auto grid max-w-7xl p-8">
			<form className="grid gap-2 sm:grid-cols-2 lg:grid-cols-8">
				<div className="md:col-span-1 lg:col-span-5">
					{product.images[0] && (
						<Image
							priority={true}
							alt={product.title ?? ""}
							width={1024}
							height={1024}
							src={product.images[0] ?? ""}
						/>
					)}
				</div>
				<div className="flex flex-col pt-6 sm:col-span-1 sm:px-6 sm:pt-0 lg:col-span-3 lg:pt-16">
					<div>
						<h1 className="mb-4 flex-auto text-3xl font-medium tracking-tight text-neutral-900 dark:text-white">
							{product.title}
						</h1>
						<p className="mb-8 text-sm " data-testid="ProductElement_Price">
							$ {product.price}
						</p>

						<div className="mt-8">
              <Link className="px-4 py-2 border border-black text-black rounded-lg transition-colors duration-200 dark:border-white dark:text-white hover:bg-[#25D366] hover:text-white hover:border-[#25D366] whitespace-nowrap" href={`https://wa.me/6281329578424?text=${encodedMessage}`}>Order by WhatsApp</Link>
						</div>
						{product.description && (
							<div className="mt-8 space-y-6 text-sm text-neutral-500">
								{product.description}
							</div>
						)}
					</div>
				</div>
			</form>
		</section>
  );
}