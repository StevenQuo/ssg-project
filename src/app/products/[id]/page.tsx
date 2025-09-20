import { getProduct } from "@/lib/products";
import { generateProductParams } from "@/lib/params/products-params";

type Props = {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams(){
    return generateProductParams();
}

export default async function ProductDetailPage({ params }: Props) {
    
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <main className="flex items-center w-full h-screen">
      <div className="flex flex-col gap-8 m-8">
        <h1 className="title">{product.title}</h1>
        <div className="">
            <p className="text-3xl text-green-600 font-semibold">${product.price}</p>
            <p className="text-sm text-gray-500">
                Category: {product.category}
            </p>
            <p>{product.description}</p>
        </div>
        <div className="">
            <a className="bg-blue-500 hover:bg-blue-700 transition-all duration-300 ease-in-out text-white font-bold py-2 px-4 rounded" href="/products/">
                Kembali
            </a>
        </div>
      </div>
    </main>
  );
}