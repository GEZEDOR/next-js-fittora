interface SizeSelectorProps {
  item: {
    sizes: string[];
  };
  selectedSize: string | null;
  onSizeSelect: (size: string) => void;
}

const SizeSelector = ({
  item,
  selectedSize,
  onSizeSelect,
}: SizeSelectorProps) => (
  <div className="mb-2">
    <p className="text-lg font-semibold">Selected Size: {selectedSize || ""}</p>
    <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
      {item.sizes.map((size, index) => (
        <button
          key={index}
          className={`w-full border py-2 text-sm font-medium text-black transition hover:border-gray-950 hover:bg-gray-200 ${
            selectedSize === size ? "border-black" : "border-gray-400"
          }`}
          onClick={() => onSizeSelect(size)}
        >
          {size}
        </button>
      ))}
    </div>
  </div>
);

export default SizeSelector;
