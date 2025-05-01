import { IProduct } from "@/types/product.interface";
import axios from "axios";

const PRODUCTS = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const ProductService = {
  async getAll() {
    const { data } = await axios<IProduct[]>({
      url: PRODUCTS,
      method: "GET",
    });
    return data;
  },
};
