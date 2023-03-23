import { getProduct, getProducts } from "@/service/product";
import { notFound } from "next/navigation";

type Props = {
  params: {
    // 생성한 키워드 이름
    slug: string;
  };
};

export default async function Pants({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) notFound();

  return <div>{product && product.name}</div>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
