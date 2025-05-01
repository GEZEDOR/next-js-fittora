import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts",
  description: "",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Contact Us</h1>
      <p className="mb-4 text-gray-600">
        We'd love to hear from you! Whether you have a question about products,
        pricing, or anything else, our team is ready to answer all your
        questions.
      </p>

      <div className="space-y-4 text-gray-700">
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:support@fittora.com"
            className="text-violet-600 underline"
          >
            support@fittora.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+77053408697" className="text-violet-600 underline">
            +7 (705) 340-86-97
          </a>
        </p>
        <p>
          <strong>Address:</strong> Проспект Назарбаева, 103, ​9 этаж
          Алмалинский район, Алматы, 050000/A05H8D1
        </p>
      </div>

      <div className="mt-8">
        <h2 className="mb-2 text-2xl font-semibold">Business Hours</h2>
        <ul className="text-gray-600">
          <li>Monday–Friday: 9:00 AM – 6:00 PM</li>
          <li>Saturday: 10:00 AM – 4:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
    </div>
  );
}
