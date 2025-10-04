import { IProduct } from "./params/products-params";

export default function getMessage(product : IProduct){
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

    return encodedMessage;
}