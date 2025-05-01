import { notFound } from "next/navigation";
import Product from "@/components/ui/product/Product";
import { ProductService } from "@/services/product.service";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
};

interface ProductPageProps {
  params: { slug: string };
}

// Функция для статической генерации маршрутов
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const products = await ProductService.getAll();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Страница товара
export default async function ProductPage(props: ProductPageProps) {
  const { params } = await Promise.resolve(props);
  const { slug } = params;

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
