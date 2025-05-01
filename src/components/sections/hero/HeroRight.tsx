import Image from "next/image";
import { FC } from "react";

const HeroRight: FC = () => {
  return (
    <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
      <div className="relative top-12 left-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-2xl shadow-orange-600 md:top-16 md:left-16 lg:ml-0">
        <Image
          src="/hero/hero-1.jpg"
          alt="Hero"
          className="h-full w-full object-cover object-center"
          priority
          width={1000}
          height={1000}
        />
      </div>

      <div className="scale-x-[-1] overflow-hidden rounded-lg bg-gray-100 shadow-2xl shadow-red-600">
        <Image
          src="/hero/hero-2.jpg"
          alt="Hero"
          className="h-full w-full object-cover object-center"
          priority
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default HeroRight;
