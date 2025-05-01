"use client";

import { useStore } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, Heart } from "lucide-react";
import { useState, useEffect } from "react";

export default function CartPage() {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const addToCart = useStore((state) => state.addToCart);

  const discountApplied = useStore((state) => state.discountApplied);
  const discountCode = useStore((state) => state.discountCode);
  const applyDiscount = useStore((state) => state.applyDiscount);
  const clearDiscount = useStore((state) => state.clearDiscount);

  const [discount, setDiscount] = useState(0);
  const [promo, setPromo] = useState("");
  const [invalidPromo, setInvalidPromo] = useState(false);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const handleApplyPromo = () => {
    if (promo === "DISCOUNT10") {
      applyDiscount(promo);
      setInvalidPromo(false);
    } else {
      clearDiscount();
      setInvalidPromo(true);
    }
    setPromo(""); // очищаем инпут
  };

  // При каждом изменении корзины — пересчитать скидку если промоакция уже применена
  useEffect(() => {
    if (discountApplied && discountCode === "DISCOUNT10") {
      setDiscount(subtotal * 0.1);
    } else {
      setDiscount(0);
    }
  }, [subtotal, discountApplied, discountCode]);

  const total = subtotal - discount;

  if (cart.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-8 p-6 lg:flex-row lg:p-12">
      {/* Left: Cart items */}
      <div className="w-full lg:w-2/3">
        <h2 className="mb-6 text-2xl font-semibold">Shopping Bag</h2>

        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={`${item._id}-${item.color}-${item.size}`}
              className="flex gap-4 border-b pb-6"
            >
              <Image
                src={item.images[0]}
                alt={item.name}
                width={130}
                height={130}
                className="rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  Category: {item.category}
                </p>
                <p className="text-sm text-gray-500">Color: {item.color}</p>
                <p className="text-sm text-gray-500">
                  Sizes: {item.sizes.join(", ")}
                </p>
                <p className="text-sm text-gray-500">
                  Material: {item.material}
                </p>
                <p className="mt-1 text-sm">
                  Price: <span className="font-semibold">{item.price} $</span>
                </p>
                {/* Кол-во и кнопки + - */}
                <div className="mt-2 flex items-center gap-2">
                  <button
                    className="rounded border p-1"
                    onClick={() => {
                      if (item.quantity > 1) {
                        useStore.setState({
                          cart: cart.map((i) =>
                            i._id === item._id
                              ? { ...i, quantity: i.quantity - 1 }
                              : i,
                          ),
                        });
                      }
                    }}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <button
                    className="rounded border p-1"
                    onClick={() => {
                      addToCart(
                        item,
                        {
                          colorName: item.color,
                          colorHex: "",
                          image: "",
                          images: item.images,
                        },
                        item.size,
                      );
                    }}
                  >
                    <Plus size={16} />
                  </button>
                  <button className="ml-4 text-gray-500">
                    <Heart size={18} />
                  </button>
                  <button
                    className="ml-2 text-red-500"
                    onClick={() =>
                      removeFromCart(item._id, item.color, item.size)
                    }
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <p className="mt-1 text-sm font-semibold">
                  Total: {item.price * item.quantity} $
                </p>
              </div>
              <div className="text-lg font-semibold">{item.price} $</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Summary */}
      <div className="w-full space-y-4 p-6 lg:w-1/3">
        <h2 className="text-xl font-semibold">Summary</h2>

        {/* Промокод с ручным применением */}
        <div>
          <label className="text-sm font-medium">Promo Code</label>
          <div className="mt-1 flex gap-2">
            <input
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
              className="w-full rounded border px-3 py-2"
              placeholder="Enter code"
            />
            <button
              className="rounded bg-black px-4 py-2 text-sm text-white"
              onClick={handleApplyPromo}
            >
              Apply
            </button>
          </div>
          {discountApplied && (
            <p className="mt-1 text-sm text-green-600">
              Promo code applied: -10%
            </p>
          )}
          {invalidPromo && (
            <p className="mt-1 text-sm text-red-600">Invalid promo code.</p>
          )}
        </div>

        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{subtotal.toFixed(2)} $</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>-{discount.toFixed(2)} $</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Shipping</span>
            <span>Free</span>
          </div>
        </div>

        <div className="flex justify-between border-y py-4 text-lg font-bold">
          <span>Total</span>
          <span>{total.toFixed(2)} $</span>
        </div>

        <p className="text-sm text-green-600">
          Free shipping for members.{" "}
          <Link href="/login" className="underline">
            Sign in
          </Link>
          or
          <Link href="/register" className="underline">
            Join us
          </Link>
        </p>

        <div className="mx-auto h-2 w-full max-w-[200px] rounded-full bg-green-600" />

        <button className="w-full rounded-full bg-black py-3 font-semibold text-white">
          Checkout
        </button>

        <p className="mt-4 text-xs text-gray-500">
          By clicking the button, you agree to the{" "}
          <Link href="/terms" className="underline">
            terms
          </Link>
          and
          <Link href="/privacy" className="underline">
            privacy policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
