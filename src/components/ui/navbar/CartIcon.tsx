"use client";
import { useStore } from "@/store/store";
import { ShoppingCart } from "lucide-react"; // или любая другая иконка
import Link from "next/link";

const CartIcon = () => {
  const cart = useStore((state) => state.cart);

  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link href="/cart" className="relative inline-block">
      <ShoppingCart className="h-6 w-6 text-gray-600 transition-colors duration-100 hover:text-violet-600" />
      {totalCount > 0 && (
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-xs text-white">
          {totalCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
