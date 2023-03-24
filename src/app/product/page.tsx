import MeaowArticle from "@/components/MeaowArticle";
import { Product, getProducts } from "@/service/product";
import Link from "next/link";

// ISR 적용시 업데이트 될 시간(현재 적용은 3초)
// export const revalidate = 3;

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
      <MeaowArticle />
    </div>
  );
}
