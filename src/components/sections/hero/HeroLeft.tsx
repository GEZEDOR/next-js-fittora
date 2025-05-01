import { FC } from "react";

const HeroLeft: FC = () => {
  return (
    <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-40 lg:pb-24">
      <h1 className="mb4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
        Top Fashion for a top price
      </h1>
      <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
        We sell only the most exclusive and high quality products for you. We
        are the best so come and shop with us.
      </p>
    </div>
  );
};

export default HeroLeft;
