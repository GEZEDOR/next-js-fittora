import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Collection = () => {
  return (
    <div className="mx-auto mb-20 w-full px-4 py-4 lg:px-15">
      <div className="relative grid w-full lg:grid-cols-1 xl:grid-cols-[3fr_2fr]">
        <div>
          <div className="relative h-[660px]">
            <Image
              src="/collection/collection-item1.jpg"
              alt="collection-item1"
              className="rounded-xl object-cover"
              fill
            />
            <div className="absolute bottom-10 flex flex-col justify-center px-3.5 sm:w-[75%] md:right-0 md:w-[90%] lg:w-[50%] xl:w-[50%]">
              <div className="text-lg text-gray-400 uppercase">
                Casual Collection
              </div>
              <div className="my-6 text-4xl font-black text-black md:w-[50%] lg:w-full lg:text-7xl xl:w-[80%]">
                Street Wear.
              </div>
              <div className="mb-5 text-[18px] font-light text-gray-400 sm:w-[60%] md:w-[65%] lg:w-[80%] xl:w-[75%]">
                Discover the perfect blend of comfort and style with our latest
                collection.
              </div>
              <Link
                href="/catalog"
                className="group mt-4 flex items-center text-[18px] font-medium text-black transition-all duration-500 hover:text-violet-600"
              >
                Shop Collection
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex min-h-[660px] flex-col xl:pl-7.5">
          <div className="relative mt-5 mb-5 h-[320px] xl:mt-0">
            <Image
              src="/collection/collection-item2.jpg"
              alt="collection-item2"
              fill
              className="rounded-xl object-cover"
            />
            <div className="absolute bottom-8 left-14">
              <div className="text-lg text-gray-400 uppercase">
                Basic Collection
              </div>
              <div className="text-6xl font-black text-black lg:w-full xl:w-[80%]">
                Basic Shoes.
              </div>
              <Link
                href="/catalog"
                className="group mt-4 flex items-center text-[18px] font-medium text-black transition-all duration-500 hover:text-violet-600"
              >
                Shop Collection
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
          <div className="relative h-[320px]">
            <Image
              src="/collection/collection-item3.jpg"
              alt="collection-item3"
              fill
              className="rounded-xl object-cover"
            />
            <div className="absolute bottom-8 left-14">
              <div className="text-lg text-gray-400 uppercase">
                Best Selling Product
              </div>
              <div className="text-6xl font-black text-black lg:w-full xl:w-[80%]">
                Woolen Hat.
              </div>
              <Link
                href="/catalog"
                className="group mt-4 flex items-center text-[18px] font-medium text-black transition-all duration-500 hover:text-violet-600"
              >
                Shop Collection
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
