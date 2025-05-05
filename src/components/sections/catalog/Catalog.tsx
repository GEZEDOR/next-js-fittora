"use client";

import { IProduct } from "@/types/product.interface";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import ProductItem from "./product-item/ProductItem";
import ProductSearch from "@/components/ui/common/search/search";

interface ICatalog {
  isFull?: boolean;
  products: IProduct[];
}

const Catalog: FC<ICatalog> = ({ products, isFull = true }) => {
  const [filteredProducts, setFilteredProducts] =
    useState<IProduct[]>(products);

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()),
    );

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const visibleProducts = isFull
    ? filteredProducts
    : filteredProducts.slice(0, 4);

  return (
    <div className="bg-white">
      <div className="mx-auto mb-20 w-full px-4 py-4 lg:px-15">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900">
            Featured Products
          </h2>
          <div className="w-full max-w-sm">
            <ProductSearch onSearch={handleSearch} />
          </div>
          {!isFull && (
            <Link
              href="/catalog"
              className="group mt-4 flex items-center text-[18px] font-medium text-black transition-all duration-500 hover:text-violet-600"
            >
              View all products
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          )}
        </div>

        <div className="ml:grid-cols-8 mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
