import { FC } from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero: FC = () => {
  return (
    <section className="mx-auto max-w-2xl px-4 lg:max-w-7xl">
      <div className="flex flex-wrap justify-between md:mb-16 xl:mb-25">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
};

export default Hero;
