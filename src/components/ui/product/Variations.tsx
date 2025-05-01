import React, { FC, useState } from "react";

interface ProductVariation {
  colorName: string;
  colorHex: string;
  image: string;
  images: string[];
}

interface IVariationsProps {
  item: {
    variations: ProductVariation[];
  };
  selectedVariation: ProductVariation;
  setSelectedVariation: (variation: ProductVariation) => void;
}

const Variations: FC<IVariationsProps> = ({
  item,
  selectedVariation,
  setSelectedVariation,
}) => {
  // Состояние для показа названия цвета при наведении
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);

  return (
    <div className="my-1 mb-2 text-gray-600">
      {/* Отображение текущего выбранного цвета */}
      <span className="font-semibold uppercase">Color: </span>
      {selectedVariation.colorName}
      {/* Список вариаций */}
      <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
        {item.variations.map((variation, index) => (
          <div
            key={index}
            onClick={() => setSelectedVariation(variation)} // Установить выбранный цвет
            onMouseEnter={() => setHoveredColor(variation.colorName)} // Показать название цвета при наведении
            onMouseLeave={() => setHoveredColor(null)} // Убрать название цвета при выходе мыши
            className="relative cursor-pointer"
          >
            {/* Миниатюра цвета */}
            <img
              src={variation.image}
              alt={variation.colorName}
              className={`h-auto w-full rounded border-2 transition-all duration-200 hover:border-black ${
                selectedVariation.colorHex === variation.colorHex
                  ? "border-black"
                  : "border-gray-400"
              }`}
            />

            {/* Показываем название цвета при наведении */}
            {hoveredColor === variation.colorName && (
              <div className="absolute top-0 left-0 z-10 rounded bg-black px-2 py-1 text-xs text-white">
                {variation.colorName}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Variations;
