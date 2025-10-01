interface IDimensions {
  width: number;
  height: number;
  depth: number;
}

interface IReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface IMeta {
  createdAt: string; 
  updatedAt: string; 
  barcode: string;
  qrCode: string; 
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[]; 
  brand: string;
  sku: string;
  weight: number;
  dimensions: IDimensions; 
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: IReview[]; 
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: IMeta; 
  images: string[];
  thumbnail: string;
}

// interface IProductResponse {
//   products: IProduct[];
//   total: number;
//   skip: number;
//   limit: number;
// }

export async function generateProductParams() {
  const res = await fetch("https://dummyjson.com/products/search?q=iphone");
  const {products} = await res.json();

  return products.map((p: IProduct) => ({
    id: p.id.toString(),
  }));
}