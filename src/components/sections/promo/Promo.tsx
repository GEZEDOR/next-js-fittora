import { FC } from "react";

const Promo: FC = () => {
  return (
    <section className="w-full grow p-4 md:flex">
      <div className="w-full bg-red-600 md:w-4/6">1</div>
      <div className="w-full bg-blue-600 md:w-2/6">1</div>
    </section>
  );
};

export default Promo;
