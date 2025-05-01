interface SizeSelectorProps {
  item: {
    sizes: string[];
  };
  selectedSize: string | null;
  onSizeSelect: (size: string) => void;
  showError?: boolean;
}

const SizeSelector = ({
  item,
  selectedSize,
  onSizeSelect,
  showError,
}: SizeSelectorProps) => (
  <div className="mb-2">
    <p className="text-lg font-semibold">Selected Size: {selectedSize || ""}</p>
    <div
      className={`mt-4 grid grid-cols-3 gap-2 rounded-md p-2 sm:grid-cols-4 md:grid-cols-5 ${
        showError ? "border border-red-500" : ""
      }`}
    >
      {item.sizes.map((size, index) => (
        <button
          key={index}
          className={`w-full border py-2 text-sm font-medium text-black transition hover:border-gray-950 hover:bg-violet-300 hover:text-white ${
            selectedSize === size
              ? "border-black bg-violet-400 text-white"
              : "border-gray-400"
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
