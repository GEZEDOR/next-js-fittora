import CartPage from "@/components/sections/cart/Cart";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
  description: "Cart",
};

export default function Page() {
  return <CartPage />;
}
