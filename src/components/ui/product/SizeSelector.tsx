import React, { useState } from "react";

interface SizeSelectorProps {
  item: {
    sizes: string[];
  };
}

const SizeSelector = ({ item }: SizeSelectorProps) => {
  // Состояние для хранения выбранного размера
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="mb-2">
      {/* Отображение выбранного размера */}
      <p className="text-lg font-semibold">
        Selected Size: {selectedSize ? selectedSize : ""}
      </p>

      {/* Кнопки размеров */}
      <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
        {item.sizes.map((size, index) => (
          <button
            key={index}
            // Классы для стилей и выделение выбранной кнопки
            className={`w-full border py-2 text-sm font-medium text-black transition hover:border-gray-950 hover:bg-gray-200 ${
              selectedSize === size ? "border-black" : "border-gray-400"
            }`}
            onClick={() => setSelectedSize(size)} // Обновление выбранного размера
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
