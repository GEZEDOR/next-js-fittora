import { create } from "zustand";

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
  images: string[];
}

interface StoreState {
  cart: CartItem[];
}

interface StoreActions {
  addToCart: (product: Product, variation: ProductVariation) => void;
  removeFromCart: (_id: string) => void;
  clearCart: () => void;
}

export const useStore = create<StoreState & StoreActions>((set) => ({
  cart: [],
  addToCart: (product, variation) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) =>
          item._id === product._id && item.color === variation.colorName,
      );

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item._id === product._id && item.color === variation.colorName
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      } else {
        return {
          cart: [
            ...state.cart,
            {
              ...product,
              images: variation.images, // заменяем общие картинки на картинки выбранной вариации
              color: variation.colorName, // 👈 добавляем цвет
              quantity: 1,
            },
          ],
        };
      }
    }),

  removeFromCart: (_id: string) =>
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== _id),
    })),
  clearCart: () => set({ cart: [] }),
}));
