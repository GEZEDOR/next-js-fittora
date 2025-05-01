import Catalog from "@/components/sections/catalog/Catalog";
import Collection from "@/components/sections/collection/Collection";
import DiscountSubscribe from "@/components/sections/discount/Discount";
import Hero from "@/components/sections/hero/Hero";
import ServiceFeatures from "@/components/sections/service-features/ServiceFeatures";
import { ProductService } from "@/services/product.service";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fittora",
  description: "E-Commerce",
};

async function getProducts() {
  const data = await ProductService.getAll();

  return data;
}

export default async function HomePage() {
  const data = await getProducts();

  return (
    <>
      <Hero />
      <Catalog products={data} isFull={false} />
      <Collection />
      <DiscountSubscribe />
      <ServiceFeatures />
    </>
  );
}
