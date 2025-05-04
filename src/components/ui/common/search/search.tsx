"use client";

import { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import { X } from "lucide-react";

interface ProductSearchProps {
  onSearch: (query: string) => void;
}

export default function ProductSearch({ onSearch }: ProductSearchProps) {
  const [query, setQuery] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const clearInput = () => {
    setQuery("");
    onSearch("");
  };

  const debouncedSearch = debounce((val: string) => {
    onSearch(val);
  }, 300);

  useEffect(() => {
    debouncedSearch(query);
    return () => debouncedSearch.cancel();
  }, [query]);

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={handleInput}
        placeholder="Search products..."
        className="w-full rounded-md border border-gray-300 p-3 pr-10 outline-none focus:border-blue-500"
      />
      {query && (
        <button
          onClick={clearInput}
          className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-1 text-gray-500 hover:text-black"
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
