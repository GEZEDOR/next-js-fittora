export interface ProductVariation {
  colorName: string;
  colorHex: string;
  image: string;
  images: string[];
}

export interface IProduct {
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
