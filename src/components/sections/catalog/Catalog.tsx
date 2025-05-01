import { IProduct } from "@/types/product.interface";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import ProductItem from "./product-item/ProductItem";

interface ICatalog {
  isFull?: boolean;
  products: IProduct[];
}

const Catalog: FC<ICatalog> = ({ products, isFull = true }) => {
  const latestProducts = isFull ? products : products.slice(0, 4);

  return (
    <div className="bg-white">
      <div className="mx-auto mb-20 w-full px-4 py-4 lg:px-15">
        <div className="flex items-center justify-between">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900">
            Featured Products
          </h2>

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
          {latestProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
