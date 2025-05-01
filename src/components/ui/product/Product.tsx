"use client";
import type { IProduct, ProductVariation } from "@/types/product.interface";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Heart } from "lucide-react";
import { useStore } from "@/store/store";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import NotFound from "@/app/not-found";
import SizeSelector from "./SizeSelector";
import Variations from "./Variations";

interface ISingleProduct {
  products: IProduct[];
}

const Product: FC<ISingleProduct> = ({ products }) => {
  const params = useParams<{ slug: string }>();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [liked, setLiked] = useState(false);
  const item = products.find((item) => item.slug === params.slug) || null;
  const [selectedVariation, setSelectedVariation] =
    useState<ProductVariation | null>(null);

  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = () => {
    if (item) {
      if (selectedVariation) {
        addToCart(item, selectedVariation);
      }
    }
  };

  useEffect(() => {
    if (item && item.variations.length > 0) {
      setSelectedVariation(item.variations[0]);
    }
  }, [item]);

  if (!item) return <NotFound />;
  if (!selectedVariation) return null;

  return (
    <div className="mx-auto mb-20 flex w-full flex-col gap-10 px-4 py-4 lg:flex-row lg:px-15">
      {/* Левая часть: изображения */}
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
                  alt={item.name}
                  className="w-full rounded-md object-cover"
                  width={428}
                  height={642}
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
                  alt={item.name}
                  className="w-full rounded-md object-cover"
                  width={428}
                  height={642}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Правая часть: инфо */}
      <div className="flex w-full justify-center lg:w-1/2">
        <div className="flex w-full max-w-md flex-col">
          {/* Верх: Информация о товаре */}
          <div>
            <div className="flex">
              <div className="w-4/5">
                <h2 className="text-2xl font-bold text-gray-800">
                  {item.name}
                </h2>
                <p className="mb-4 text-xl font-semibold text-gray-800">
                  ${item.price}
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
              item={item}
              selectedVariation={selectedVariation}
              setSelectedVariation={setSelectedVariation}
            />

            <p className="mb-2 text-gray-600">
              <span className="font-semibold">Category: </span>
              {item.category}
            </p>

            <p className="mb-2 text-gray-600">
              <span className="font-semibold">Material: </span>
              {item.material}
            </p>

            <p className="mb-5 text-gray-600">
              <span className="font-semibold">Description: </span>
              {item.description}
            </p>
          </div>

          {/* Низ: Кнопка и размеры */}
          <SizeSelector item={item} />
          <div>
            <button
              className="mt-5 w-full cursor-pointer rounded-md bg-black py-3 text-white transition hover:bg-gray-500"
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
