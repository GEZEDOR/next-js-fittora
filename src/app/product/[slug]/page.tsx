import { notFound } from "next/navigation";
import Product from "@/components/sections/product/Product";
import { ProductService } from "@/services/product.service";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
};

// interface ProductPageProps {
//   params: { slug: string };
// }

// Страница товара
export default async function ProductPage({ params }: any) {
  const { slug } = await Promise.resolve(params);

  const products = await ProductService.getAll();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-4 flex justify-center">
      <Product product={product} />
    </div>
  );
}
