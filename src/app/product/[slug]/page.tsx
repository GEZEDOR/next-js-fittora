import { notFound } from "next/navigation";
import Product from "@/components/ui/product/Product";
import { ProductService } from "@/services/product.service";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Товар",
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
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await Promise.resolve(params);

  const products = await ProductService.getAll();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-4 flex justify-center">
      <Product products={[product]} />
    </div>
  );
}
