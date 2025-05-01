"use client";
import type { IProduct, ProductVariation } from "@/types/product.interface";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Heart } from "lucide-react";
import { useStore } from "@/store/store";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";

import Variations from "./Variations";
import SizeSelector from "./SizeSelector";

interface ISingleProduct {
  product: IProduct;
}

const Product: FC<ISingleProduct> = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [liked, setLiked] = useState(false);
  const [selectedVariation, setSelectedVariation] =
    useState<ProductVariation | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = () => {
    if (product && selectedVariation && selectedSize) {
      addToCart(product, selectedVariation, selectedSize);
    }
  };

  useEffect(() => {
    if (product && product.variations.length > 0) {
      setSelectedVariation(product.variations[0]);
    }
  }, [product]);

  if (!selectedVariation) return null;

  return (
    <div className="mx-auto mb-20 flex w-full flex-col gap-10 px-4 py-4 lg:flex-row lg:px-15">
      {/* Изображения */}
      <div className="flex w-full flex-col items-center gap-4 lg:w-1/2">
        <div className="w-full max-w-md">
          <Swiper
            style={
              {
                "--swiper-navigation-color": "#7f22fe",
                "--swiper-pagination-color": "#7f22fe",
              } as React.CSSProperties
            }
            loop
            spaceBetween={10}
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {selectedVariation.images.map((photo, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={photo}
                  alt={product.name}
                  className="rounded-md object-cover"
                  width={1260}
                  height={1890}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full max-w-md">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop
            spaceBetween={10}
            slidesPerView={4}
            freeMode
            watchSlidesProgress
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {selectedVariation.images.map((photo, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={photo}
                  alt={product.name}
                  className="rounded-md object-cover"
                  width={1260}
                  height={1890}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      Папа, [5/1/2025 7:40 PM]
      {/* Описание товара */}
      <div className="flex w-full justify-center lg:w-1/2">
        <div className="flex w-full max-w-md flex-col justify-between">
          <div>
            <div className="flex">
              <div className="w-4/5">
                <h2 className="text-2xl font-bold text-gray-800">
                  {product.name}
                </h2>
                <p className="mb-4 text-xl font-semibold text-gray-800">
                  ${product.price}
                </p>
              </div>
              <div className="flex w-1/5 items-start justify-end">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`cursor-pointer rounded-full p-2 transition-colors duration-200 ${
                    liked ? "text-red-500" : "text-gray-500 hover:text-red-500"
                  }`}
                  aria-label="Toggle favorite"
                >
                  <Heart
                    className={`h-6 w-6 transition-transform duration-200 ${
                      liked ? "fill-red-500" : "fill-none"
                    }`}
                  />
                </button>
              </div>
            </div>

            <Variations
              item={product}
              selectedVariation={selectedVariation}
              setSelectedVariation={setSelectedVariation}
            />

            <p className="mb-2 text-gray-600">
              <span className="font-semibold">Category: </span>
              {product.category}
            </p>

            <p className="mb-2 text-gray-600">
              <span className="font-semibold">Material: </span>
              {product.material}
            </p>

            <p className="mb-2 text-gray-600">
              <span className="font-semibold">Description: </span>
              {product.description}
            </p>
          </div>

          <SizeSelector
            item={product}
            selectedSize={selectedSize}
            onSizeSelect={setSelectedSize}
          />

          <div>
            <button
              className="w-full cursor-pointer rounded-md bg-black py-3 text-white transition hover:bg-gray-500"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
