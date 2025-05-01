import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">About Fittora</h1>
      <p className="mb-4 text-gray-600">
        Fittora is a modern fashion brand focused on combining style, comfort,
        and sustainability. We believe that fashion should empower people to
        express themselves while respecting the planet.
      </p>
      <p className="mb-4 text-gray-600">
        Founded in 2024, our mission is to provide high-quality clothing that
        fits perfectly and inspires confidence. Every item is crafted with
        attention to detail and designed to be both timeless and functional.
      </p>
      <p className="mb-4 text-gray-600">
        At Fittora, we're more than just clothing — we're a community. Join us
        on our journey as we redefine fashion, one fit at a time.
      </p>

      <div className="mt-8">
        <h2 className="mb-2 text-2xl font-semibold text-gray-900">
          Our Values
        </h2>
        <ul className="list-inside list-disc text-gray-600">
          <li>Design with purpose</li>
          <li>Commitment to sustainability</li>
          <li>Customer-first mindset</li>
          <li>Continuous innovation</li>
        </ul>
      </div>
    </div>
  );
}
