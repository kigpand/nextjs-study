import { notFound } from "next/navigation";

type Props = {
  params: {
    // 생성한 키워드 이름
    slug: string;
  };
};

export default function Pants({ params }: Props) {
  if (params.slug === "nothing") {
    notFound();
  }
  return <div>{params.slug}</div>;
}

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
