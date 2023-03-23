import { Product, getProducts } from "@/service/product";
import Link from "next/link";

export default async function ProductPage() {
  const products = await getProducts();
  return (
    <div>
      Product Main
      {products.map((product: Product, i: number) => {
        return (
          <Link href={`/product/${product.id}`} key={i}>
            {product.name}
          </Link>
        );
      })}
    </div>
  );
}
