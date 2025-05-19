// store.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProductVariation {
  colorName: string;
  colorHex: string;
  image: string;
  images: string[];
}

interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  material: string;
  category: string;
  price: number;
  sizes: string[];
  variations: ProductVariation[];
}

interface CartItem extends Product {
  quantity: number;
  color: string;
  size: string;
  image: string;
  images: string[];
}

interface StoreState {
  cart: CartItem[];
  discountApplied: boolean;
  discountCode: string;
}

interface StoreActions {
  addToCart: (
    product: Product,
    variation: ProductVariation,
    size: string,
  ) => void;
  removeFromCart: (_id: string, color: string, size: string) => void;
  clearCart: () => void;
  applyDiscount: (code: string) => void;
  clearDiscount: () => void;
}

export const useStore = create<StoreState & StoreActions>()(
  persist(
    (set, get) => ({
      cart: [],

      discountApplied: false,
      discountCode: "",

      addToCart: (product, variation, size) => {
        const state = get();
        const existingItem = state.cart.find(
          (item) =>
            item._id === product._id && item.color === variation.colorName && item.size === size,
        );

        if (existingItem) {
          set({
            cart: state.cart.map((item) =>
              item._id === product._id && item.color === variation.colorName && item.size === size
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
          });
        } else {
          set({
            cart: [
              ...state.cart,
              {
                _id: product._id, name: product.name, slug: product.slug, description: product.description,
                material: product.material,category: product.category,price: product.price,
                sizes: product.sizes, variations: product.variations, images: variation.images,
                image: variation.image, color: variation.colorName, size: size, quantity: 1,
              },
            ],
          });
        }
      },

      removeFromCart: (_id, color, size) =>
        set((state) => ({
          cart: state.cart.filter(
            (item) =>
              !(item._id === _id && item.color === color && item.size === size),
          ),
        })),

      clearCart: () => set({ cart: [] }),

      applyDiscount: (code) =>
        set({
          discountApplied: true,
          discountCode: code,
        }),

      clearDiscount: () =>
        set({
          discountApplied: false,
          discountCode: "",
        }),
    }),
    {
      name: "store-storage",
    },
  ),
);
