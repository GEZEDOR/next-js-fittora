import Catalog from "@/components/sections/catalog/Catalog";
import { ProductService } from "@/services/product.service";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog",
};

async function getProducts() {
  const data = await ProductService.getAll();

  return data;
}

export default async function CatalogPage() {
  const data = await getProducts();

  return <Catalog isFull products={data} />;
}
