"use client";

import { useState } from "react";
import { AlertTriangle } from "lucide-react";

export default function DiscountSubscribe() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = () => {
    const allowedDomains = ["@gmail.com", "@mail.ru", "@outlook.com"];
    const isValid = allowedDomains.some((domain) => email.endsWith(domain));

    if (email.trim() === "") {
      setError("Email cannot be empty.");
      return;
    }

    if (!isValid) {
      setError(
        "Please use a valid email domain: gmail.com, mail.ru, outlook.com.",
      );
      return;
    }

    setError("");
    setShowModal(true);
    setEmail("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("DISCOUNT10");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 text-center md:grid-cols-2 md:items-center md:text-left">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get 10% Off Discount Coupons
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Subscribe to our newsletter and be the first to know about our
              exclusive offers, updates, and promotions. Unlock your 10%
              discount today!
            </p>
          </div>
          <div className="flex w-full flex-col sm:flex-row sm:justify-end">
            <input
              type="email"
              className="w-full flex-grow rounded-l-md border border-gray-300 px-4 py-3 text-sm text-violet-600 focus:ring-2 focus:ring-black focus:outline-none sm:w-auto"
              placeholder="Enter your email address here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSubscribe}
              className="mt-2 rounded-r-md bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-violet-600 sm:mt-0 sm:ml-0"
            >
              SUBSCRIBE NOW
            </button>
          </div>
        </div>

        {error && (
          <p className="mt-2 flex items-center gap-1 text-sm text-red-600 sm:justify-end">
            <AlertTriangle size={16} className="text-red-600" />
            {error}
            <button
              onClick={() => setError("")}
              className="ml-2 text-xs underline hover:text-red-700"
            >
              Close
            </button>
          </p>
        )}
      </div>

      {/* Модальное окно */}
      {showModal && (
        <div
          className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black px-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-2 text-center text-xl font-bold">
              Thanks for subscribing!
            </h3>
            <p className="text-center text-gray-700">
              You've received a 10% discount code:
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="rounded border border-green-600 bg-gray-100 px-4 py-2 font-mono text-sm tracking-wide text-green-700">
                DISCOUNT10
              </div>
              <button
                onClick={handleCopy}
                className="rounded bg-black px-3 py-2 text-xs font-semibold text-white hover:bg-violet-600"
              >
                {copied ? "Copied!" : "Copy Code"}
              </button>
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowModal(false)}
                className="rounded bg-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
