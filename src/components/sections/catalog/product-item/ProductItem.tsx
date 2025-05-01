import { IProduct } from "@/types/product.interface";
import { convertPrice } from "@/utils/convert.price";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
  const firstVariation = product.variations?.[0];
  const firstImage = firstVariation?.images?.[0];
  const hoverImage = firstVariation?.image;

  const shouldShowHoverImage = hoverImage && hoverImage !== firstImage;

  return (
    <div className="group relative flex flex-col">
      <div className="relative">
        {/* Основное изображение */}
        <Image
          src={firstImage}
          alt={product.name}
          className="rounded-md"
          width={428}
          height={642}
        />
        {/* Картинка при наведении */}
        {shouldShowHoverImage && (
          <Image
            src={hoverImage}
            alt={`${product.name} hover`}
            className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100"
            width={428}
            height={642}
          />
        )}
      </div>

      <div className="mt-4 flex justify-between">
        <div>
          <p className="text-sm text-gray-400 uppercase">{product.category}</p>
          <h3 className="text-lg text-black">
            <Link href={`/product/${product.slug}`}>
              <span className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
        </div>
        <p className="self-center text-xl font-medium text-violet-600">
          {convertPrice(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
