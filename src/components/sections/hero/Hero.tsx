import { FC } from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero: FC = () => {
  return (
    <section className="mx-auto mb-10 max-w-2xl px-4 md:mb-16 lg:max-w-7xl xl:mb-25">
      <div className="flex flex-wrap justify-between">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
};

export default Hero;
